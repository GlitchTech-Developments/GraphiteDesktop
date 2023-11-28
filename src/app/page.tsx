import { Suspense } from "react";

import LoadingDots from "@/components/LoadingDots";
import Logo from "@/components/Logo";
import SplashScreenProvider from "@/providers/SplashScreenProvider";

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
