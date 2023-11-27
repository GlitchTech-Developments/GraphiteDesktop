"use client";

import { Suspense, useEffect, useState } from "react";

import LoadingDots from "@/components/LoadingDots";
import SplashScreenProvider from "@/providers/SplashScreenProvider";

const Logo = () => {
  return (
    <svg
      className="g-card-logo animate-spin-slow"
      viewBox="0 0 141 140"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m27.635 27.133 58.556-15.69 42.866 42.866-15.69 58.556-58.556 15.69-42.866-42.866 15.69-58.556zm17.607 86.616h50.518l25.259-43.75-25.259-43.75h-50.518l-25.259 43.75 25.259 43.75zm14.529-83.796 40.046 10.731 10.731 40.046-29.317 29.317-40.046-10.731-10.731-40.046 29.317-29.317z"
        clipRule="evenodd"
        fillRule="evenodd"
      />
    </svg>
  );
};

const App = () => {
  return (
    <Suspense>
      <SplashScreenProvider key={new Date().getMilliseconds()}>
        <div className="g-wrapper">
          <div className="g-content">
            <div className="g-content-wrapper">
              <div className="g-bg-plus"></div>
              <div className="flex flex-1 items-center justify-center">
                <div className="g-card min-w-[350px]">
                  <Logo />
                  <div className="flex w-full flex-col px-[var(--space-xxl)] text-center">
                    <span className="w-full text-[24px] font-medium">
                      Welcome to Graphite
                    </span>
                    <span className="mt-2 w-full">
                      Checking status of Graphite Web
                      <LoadingDots key={new Date().getMilliseconds()} />
                    </span>
                    <span className="mt-2 w-full">
                      If you see this screen for more than 2 seconds, please
                      right-click on the window content and press
                      &apos;Reload&apos;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SplashScreenProvider>
    </Suspense>
  );
};

export default App;
