export function useGetEmployeeImageUrl(name) {
  return new URL(`../assets/images/employees/${name}`, import.meta.url).href;
}
