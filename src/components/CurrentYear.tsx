// Reading the current time while prerendering is a build error under Cache
// Components unless it happens inside a "use cache" scope, which caches the
// result with the page and refreshes it when the cache revalidates.
export default async function CurrentYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}
