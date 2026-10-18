export const json = (body, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' }
  });

// リダイレクト先などに使う、このサイト自身の URL(末尾のスラッシュなし)
export function siteOrigin(req) {
  return (process.env.SITE_URL || new URL(req.url).origin).replace(/\/$/, '');
}

export async function readJson(req) {
  try {
    const body = await req.json();
    return body && typeof body === 'object' ? body : {};
  } catch {
    return {};
  }
}
