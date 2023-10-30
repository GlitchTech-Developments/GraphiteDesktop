"use client";

import React, { useEffect, useState } from "react";

import { checkWebsiteAvailability } from "@/utils/isEndpointUp";
import { isNative } from "@/utils/isNativeRuntime";

const debug = false;

const SplashScreenProvider = ({ children }: { children: React.ReactNode }) => {
  const [splashScreenClosed, setSplashScreenClosed] = useState(false);

  useEffect(() => {
    invokeSplashScreenCloseFunction({
      splashScreenClosed,
      setSplashScreenClosed,
    });
  }, [splashScreenClosed]);

  return children;
};

interface InvokeSplashScreenCloseFunctionProps {
  splashScreenClosed: boolean;
  setSplashScreenClosed: (value: boolean) => void;
}

const invokeSplashScreenCloseFunction = async ({
  splashScreenClosed,
  setSplashScreenClosed,
}: InvokeSplashScreenCloseFunctionProps) => {
  if (splashScreenClosed || debug) return;

  const url = "https://app.graphite.dev";

  const remoteAvailableCheck = await checkWebsiteAvailability(url);

  const invokeNativeCloseCall = async () => {
    const { invoke } = await import("@tauri-apps/api/tauri");
    invoke("close_splashscreen");
  };

  const timeout = setTimeout(() => {
    if (splashScreenClosed) {
      clearTimeout(timeout);
      return;
    }

    if (!remoteAvailableCheck) {
      console.log("remote not available", remoteAvailableCheck);
      return;
    }

    if (isNative) {
      invokeNativeCloseCall();
    } else {
      window.location.assign(url);
    }

    setSplashScreenClosed(true);
    clearTimeout(timeout);
  }, 2000);
};

export default SplashScreenProvider;
