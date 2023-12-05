import { Suspense } from "react";
import AnimatedCursor from "react-animated-cursor";

import CustomCursor from "@/components/CustomCursor";
import LoadingDots from "@/components/LoadingDots";
import Logo from "@/components/Logo";
import PlusIcon from "@/images/plus.webp";
import SplashScreenProvider from "@/providers/SplashScreenProvider";
import { cn } from "@/utils/cn";

const App = () => {
  const abrStyles = cn(
    "[mask-image: radial-gradient(circle 240px at var(--mouse-x-pos) var(--mouse-y-pos),rgba(1, 1, 1, 0.36),rgba(1, 1, 1, 0.16))] [background-position:50%] [image-rendering:pixelated]",
  );

  return (
    <Suspense>
      <SplashScreenProvider key={new Date().getMilliseconds()}>
        <div className="g-wrapper">
          <div className="g-content">
            <div className="g-content-wrapper">
              <div
                className={cn(
                  abrStyles,
                  "z-1 absolute h-full w-full opacity-25",
                )}
                style={{ backgroundImage: `url(${PlusIcon.src})` }}
              ></div>
              <CustomCursor />
              <div className="z-10 flex flex-1 items-center justify-center">
                <div className="g-card min-w-[350px]">
                  <Logo />
                  <div className="flex w-full flex-col px-[var(--space-xxl)] text-center">
                    <span className="w-full text-[24px] font-medium">
                      Welcome to Graphite
                    </span>
                    <span className="mt-2 w-full animate-pulse">
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
