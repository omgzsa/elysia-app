// require() only in webpack
export function useGetPartnerLogosUrl(name) {
  return new URL(`../assets/images/partners/${name}`, import.meta.url).href;
}
