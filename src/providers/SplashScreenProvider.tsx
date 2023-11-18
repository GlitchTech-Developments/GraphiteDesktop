"use client";

import React, { useEffect } from "react";

import { checkWebsiteAvailability } from "@/utils/isEndpointUp";
import { isNative } from "@/utils/isNativeRuntime";

const SplashScreenProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    invokeSplashScreenCloseFunction();
    lockContextMenuOnProd();
  }, []);

  return children;
};

const lockContextMenuOnProd = () => {
  if (process.env.NODE_ENV !== "development") {
    document.addEventListener("contextmenu", (e) => e.preventDefault());
  }
};

const invokeSplashScreenCloseFunction = async () => {
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

export default SplashScreenProvider;
