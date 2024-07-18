import { load } from "cheerio";

export function parseNextData(html: string, key: string) {
  const $ = load(html);
  const raw = $('script[id="__NEXT_DATA__"]').html();
  if (!raw) {
    return {};
  }
  const data = JSON.parse(raw).props.pageProps;

  return data?.[key] ?? {};
}
