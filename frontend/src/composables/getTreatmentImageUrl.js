export function useGetTreatmentImageUrl(name) {
  return new URL(`../assets/images/treatments/${name}`, import.meta.url).href;
}
