import { useCallback, useEffect, useRef, useState } from 'react';
import {
  loadEntitlement, saveEntitlement, isEntitled, needsRefresh, toEntitlement,
  verifyCheckoutSession, refreshEntitlement, exchangeLoginToken,
  createCheckoutUrl, createPortalUrl, requestLoginLink
} from '../utils/entitlement';

const CONFIG_KEY = 'oneStepPremiumEnabled';

// 有料プランが有効か。前回の結果を覚えておき、オフラインでも同じ状態で開けるようにする。未確認のうちは、無効(全員が無料)
function loadPremiumEnabled() {
  try {
    return localStorage.getItem(CONFIG_KEY) === 'true';
  } catch {
    return false;
  }
}

function savePremiumEnabled(enabled) {
  try {
    localStorage.setItem(CONFIG_KEY, String(enabled));
  } catch {
    // 保存できない環境でも、画面は動かす
  }
}

const NETWORK_ERROR = '通信できませんでした。インターネットの接続を確かめて、もう一度お試しください。';

// URL に付いた、購入後の戻り(checkout)やログイン用リンク(login)の情報を取り出し、URL から消す
function takeUrlParams() {
  const params = new URLSearchParams(window.location.search);
  const found = {
    checkout: params.get('checkout'),
    sessionId: params.get('session_id'),
    login: params.get('login')
  };
  if (found.checkout || found.login) {
    ['checkout', 'session_id', 'login'].forEach((key) => params.delete(key));
    const query = params.toString();
    window.history.replaceState({}, '', `${window.location.pathname}${query ? `?${query}` : ''}`);
  }
  return found;
}

export default function useEntitlement() {
  const [entitlement, setEntitlement] = useState(loadEntitlement);
  const [notice, setNotice] = useState(null);
  const [busy, setBusy] = useState(false);
  const [premiumEnabled, setPremiumEnabled] = useState(loadPremiumEnabled);
  const started = useRef(false);

  useEffect(() => {
    fetch('/.netlify/functions/config')
      .then((res) => (res.ok ? res.json() : null))
      .then((config) => {
        if (config && typeof config.premium === 'boolean') {
          savePremiumEnabled(config.premium);
          setPremiumEnabled(config.premium);
        }
      })
      .catch(() => {
        // 通信できないときは、前回の状態のまま
      });
  }, []);

  const store = useCallback((next) => {
    saveEntitlement(next);
    setEntitlement(next);
  }, []);

  const accept = useCallback((result, successText) => {
    if (result.ok && result.data.active) {
      store(toEntitlement(result.data));
      setNotice({ type: 'success', text: successText });
    } else {
      setNotice({ type: 'error', text: result.status === 0 ? NETWORK_ERROR : result.data.error || '購入を確認できませんでした。' });
    }
  }, [store]);

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const { checkout, sessionId, login } = takeUrlParams();

    (async () => {
      if (checkout === 'cancel') {
        setNotice({ type: 'info', text: 'お手続きは、完了していません。いつでも、もう一度お試しいただけます。' });
      } else if (checkout === 'success' && sessionId) {
        accept(await verifyCheckoutSession(sessionId), 'ご契約ありがとうございます。中級・上級と、AI での回答が使えるようになりました。');
      } else if (login) {
        accept(await exchangeLoginToken(login), '確認できました。この端末で、プレミアムプランが使えるようになりました。');
      } else if (needsRefresh(entitlement)) {
        // 静かに更新する。通信できないだけなら、手持ちのトークンの期限まで、そのまま使う
        const result = await refreshEntitlement(entitlement.token);
        if (result.ok && result.data.active) store(toEntitlement(result.data));
        else if (result.status !== 0) store(null);
      }
    })();
  }, [accept, entitlement, store]);

  const redirectTo = useCallback(async (request, failureText) => {
    setBusy(true);
    const result = await request();
    if (result.ok && result.data.url) {
      window.location.assign(result.data.url);
      return;
    }
    setBusy(false);
    setNotice({ type: 'error', text: result.status === 0 ? NETWORK_ERROR : result.data.error || failureText });
  }, []);

  const upgrade = useCallback(() => redirectTo(createCheckoutUrl, '購入画面を開けませんでした。'), [redirectTo]);

  const manage = useCallback(
    () => redirectTo(() => createPortalUrl(entitlement?.token), '契約の管理画面を開けませんでした。'),
    [redirectTo, entitlement]
  );

  // サーバーから「有料ではない」と言われたときに、手持ちのトークンを確かめ直す。失効していれば、無料の状態に戻す
  const revalidate = useCallback(async () => {
    if (!entitlement?.token) return;
    const result = await refreshEntitlement(entitlement.token);
    if (result.ok && result.data.active) store(toEntitlement(result.data));
    else if (result.status !== 0) store(null);
  }, [entitlement, store]);

  const restore = useCallback(async (email) => {
    setBusy(true);
    const result = await requestLoginLink(email);
    setBusy(false);
    if (result.ok) {
      setNotice({ type: 'info', text: '購入時のメールアドレスが登録されていれば、確認用のメールをお送りしました。15分以内に、メールのリンクを開いてください。' });
    } else {
      setNotice({ type: 'error', text: result.status === 0 ? NETWORK_ERROR : result.data.error || 'メールを送れませんでした。' });
    }
    return result.ok;
  }, []);

  return {
    premiumEnabled,
    // 有料プランが無効なうちは、全員が全レベルを使える
    isPro: !premiumEnabled || isEntitled(entitlement),
    token: entitlement?.token,
    notice,
    busy,
    upgrade,
    manage,
    restore,
    revalidate,
    dismissNotice: () => setNotice(null)
  };
}
