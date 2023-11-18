import { checkWebsiteAvailability } from "./isEndpointUp";
import { isNative } from "./isNativeRuntime";

export const invokeSplashScreenCloseFunction = async () => {
  const url = "https://app.graphite.dev";

  const remoteAvailableCheck = await checkWebsiteAvailability(url);

  const invokeNativeCloseCall = async () => {
    const { invoke } = await import("@tauri-apps/api/tauri");
    invoke("close_splashscreen");
  };

  const timeout = setTimeout(() => {
    if (!remoteAvailableCheck) {
      console.log("remote not available", remoteAvailableCheck);
      return;
    }

    if (isNative) {
      invokeNativeCloseCall();
    } else {
      window.location.assign(url);
    }

    clearTimeout(timeout);
  }, 2000);
};
