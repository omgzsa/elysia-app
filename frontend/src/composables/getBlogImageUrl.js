export function useGetBlogImageUrl(name) {
  return new URL(`../assets/images/blog/${name}`, import.meta.url).href;
}
