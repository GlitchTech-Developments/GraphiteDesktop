import { isNative } from "./isNativeRuntime";

export const checkWebsiteAvailability = async (url: string) => {
  if (isNative) {
    const getRemoteAvailableCheck = async () => {
      const { invoke } = await import("@tauri-apps/api/tauri");
      const res = await invoke("get_remote_status", {
        url,
      });
      return res;
    };

    return (await getRemoteAvailableCheck()) == "online";
  } else {
    const isAvailable = await fetch(url, {
      mode: "no-cors",
      next: {
        revalidate: 0,
      },
    })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });
    return isAvailable;
  }
};
