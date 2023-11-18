"use client";

import React, { useEffect } from "react";

import { invokeSplashScreenCloseFunction } from "@/utils/spashHandler";

const SplashScreenProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    invokeSplashScreenCloseFunction();
  }, []);

  return <>{children}</>;
};

export default SplashScreenProvider;
