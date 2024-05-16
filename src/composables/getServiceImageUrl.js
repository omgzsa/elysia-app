export function useGetServiceImageUrl(name) {
  return new URL(`../assets/images/services/${name}`, import.meta.url).href;
}
