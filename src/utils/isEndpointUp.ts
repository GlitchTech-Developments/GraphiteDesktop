import { isNative } from "./isNativeRuntime";

export const checkWebsiteAvailability = async (url: string) => {
  if (isNative) {
    const { ResponseType } = await import("@tauri-apps/api/http");
    const { nativeFetch } = await import("@/utils/nativeFetch");
    const { native } = await nativeFetch();

    if (!native) return false;

    const isAvailable = await native(url, {
      method: "GET",
      responseType: ResponseType.Text,
      headers: {
        // headers to convert html response to json
        Accept: "text/html",
        // cache headers to prevent caching
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    })
      .then((res) => res.ok)
      .catch((e) => {
        console.error(e);
        return false;
      });
    return isAvailable;
  } else {
    const isAvailable = await fetch(url, { mode: "no-cors" })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
    return isAvailable;
  }
};
