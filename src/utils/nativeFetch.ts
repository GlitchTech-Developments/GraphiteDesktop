import { isNative } from "./isNativeRuntime";

/**
 * The function `nativeFetch` returns the `fetch` function from the `@tauri-apps/api/http` module if
 * the environment is native, otherwise it returns the global `fetch` function.
 * @returns The function `nativeFetch` returns the value of the "fetch" property from the `module` Map.
 */
export const nativeFetch = async () => {
  const fetchers = {
    web: isNative ? undefined : fetch.bind(window) ?? undefined,
    native: isNative
      ? await import("@tauri-apps/api/http").then((mod) => mod.fetch)
      : undefined,
  };

  return fetchers;
};
