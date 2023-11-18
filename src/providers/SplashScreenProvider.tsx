"use client";

import React, { useEffect } from "react";

import { invokeSplashScreenCloseFunction } from "@/utils/spashHandler";

const SplashScreenProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    void invokeSplashScreenCloseFunction();
  }, []);

  return <div>{children}</div>;
};

export default SplashScreenProvider;
