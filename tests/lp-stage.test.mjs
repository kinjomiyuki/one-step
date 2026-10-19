import test from 'node:test';
import assert from 'node:assert/strict';
import {
  LAYER_COUNT, SPAN, Z_FAR, SCENE_WINDOWS, clamp, smooth, layerZ, layerOpacity, sceneOpacity, flowOffset
} from '../src/components/lp/stageMath.js';
import { tokenizeLine } from '../src/components/lp/codeTokens.js';
import { SNIPPETS, buildLayerLines, LINES_PER_LAYER } from '../src/data/lpCode.js';

const steps = Array.from({ length: 201 }, (_, i) => i / 200);

test('stageMath: clamp と smooth は、範囲を守る', () => {
  assert.equal(clamp(2), 1);
  assert.equal(clamp(-1), 0);
  assert.equal(smooth(0, 1, -5), 0);
  assert.equal(smooth(0, 1, 5), 1);
  assert.ok(smooth(0, 1, 0.5) > 0.49 && smooth(0, 1, 0.5) < 0.51);
});

test('stageMath: 板の位置は、常に、奥の端から手前の端の間にあり、透明度は 0 から 1', () => {
  for (const p of steps) {
    for (let i = 0; i < LAYER_COUNT; i += 1) {
      const z = layerZ(i, p);
      assert.ok(z >= Z_FAR && z < Z_FAR + SPAN, `z=${z}`);
      const o = layerOpacity(z);
      assert.ok(o >= 0 && o <= 1, `opacity=${o}`);
    }
  }
});

test('stageMath: 廊下が途切れない(どの進み具合でも、見える板が、複数ある)', () => {
  for (const p of steps) {
    const visible = Array.from({ length: LAYER_COUNT }, (_, i) => layerOpacity(layerZ(i, p))).filter((o) => o > 0.3).length;
    assert.ok(visible >= 2, `p=${p}: 見える板が ${visible} 枚`);
  }
});

test('stageMath: 板は、端で、透明になる(突然、現れたり、消えたりしない)', () => {
  assert.equal(layerOpacity(Z_FAR), 0);
  assert.ok(layerOpacity(Z_FAR + SPAN - 0.001) < 0.001);
});

test('stageMath: 最初は、見出しの場面、最後は、行動の呼びかけの場面が、見える', () => {
  assert.equal(sceneOpacity(0, SCENE_WINDOWS.intro), 1);
  assert.equal(sceneOpacity(1, SCENE_WINDOWS.cta), 1);
});

test('stageMath: 場面どうしが、重ならない(同時に見える文字は、1 つだけ)', () => {
  for (const p of steps) {
    const total = Object.values(SCENE_WINDOWS).reduce((sum, w) => sum + sceneOpacity(p, w), 0);
    assert.ok(total <= 1.0001, `p=${p}: 合計 ${total}`);
  }
});

test('stageMath: コードの流れは、1 ブロックの範囲に収まる(偶数は上へ、奇数は下へ)', () => {
  for (const p of steps) {
    const up = flowOffset(0, p, 640, 1.5);
    const down = flowOffset(1, p, 640, 1.5);
    assert.ok(up <= 0 && up > -640);
    assert.ok(down < 0 && down >= -640);
  }
});

test('codeTokens: 行を、色分けの単位に分け、つなぐと、元の行に戻る', () => {
  for (const snippet of SNIPPETS) {
    for (const line of snippet) {
      assert.equal(tokenizeLine(line).map((t) => t.text).join(''), line);
    }
  }
  assert.equal(tokenizeLine('// 説明')[0].type, 'comment');
  assert.ok(tokenizeLine('const a = "x";').some((t) => t.type === 'keyword' && t.text === 'const'));
  assert.ok(tokenizeLine('const a = "x";').some((t) => t.type === 'string'));
});

test('lpCode: 板ごとに、決まった行数で、板によって、違う内容になる', () => {
  for (let i = 0; i < LAYER_COUNT; i += 1) assert.equal(buildLayerLines(i).length, LINES_PER_LAYER);
  assert.notDeepEqual(buildLayerLines(0), buildLayerLines(1));
});
