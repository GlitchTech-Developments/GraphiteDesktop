import { checkWebsiteAvailability } from "./isEndpointUp";
import { isNative } from "./isNativeRuntime";

export const invokeSplashScreenCloseFunction = async () => {
  try {
    const url = "https://app.graphite.dev";
    const remoteAvailableCheck = await checkWebsiteAvailability(url);

    const invokeNativeCloseCall = async () => {
      const { invoke } = await import("@tauri-apps/api/tauri");
      invoke("close_splashscreen");
    };

    if (!remoteAvailableCheck) {
      console.error("remote not available", remoteAvailableCheck);
      return;
    }

    const pushToLocation = async () => {
      console.debug("pushing to graphite web-app");
      if (isNative) {
        await invokeNativeCloseCall();
      } else {
        window.location.assign(url);
      }
    };
    setTimeout(pushToLocation, 1800);
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};
