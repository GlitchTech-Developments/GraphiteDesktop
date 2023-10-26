import { render } from "preact";
import { useState } from "preact/hooks";

import "@/styles/tailwind.css";

import SplashScreenProvider from "./providers/SplashScreenProvider";

const mountPoint = document.getElementById("GLITCHTECH_APP");

const Logo = () => {
  return (
    <svg
      class="g-card-logo animate-spin-slow"
      viewBox="0 0 141 140"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m27.635 27.133 58.556-15.69 42.866 42.866-15.69 58.556-58.556 15.69-42.866-42.866 15.69-58.556zm17.607 86.616h50.518l25.259-43.75-25.259-43.75h-50.518l-25.259 43.75 25.259 43.75zm14.529-83.796 40.046 10.731 10.731 40.046-29.317 29.317-40.046-10.731-10.731-40.046 29.317-29.317z"
        clip-rule="evenodd"
        fill-rule="evenodd"
      />
    </svg>
  );
};

const App = () => {
  const [loadingStep, setLoadingStep] = useState(1);

  const LoadingDots = () => {
    const dots = Array(loadingStep)
      .fill(0)
      .map((_, i) => (
        <span key={i} className="animate-pulse">
          .
        </span>
      ));
    if (loadingStep < 3) {
      setTimeout(() => {
        setLoadingStep((prev) => prev + 1);
      }, 750);
    } else {
      setTimeout(() => {
        setLoadingStep(1);
      }, 750);
    }

    return <span className="text-[#8e8e8e]">{dots}</span>;
  };

  return (
    <SplashScreenProvider>
      <div class="g-wrapper">
        <div class="g-content">
          <div className="g-content-wrapper">
            <div
              class="g-bg-plus"
              style="--mouse-x-pos: 783px; --mouse-y-pos: 584px;"
            ></div>
            <div className="flex flex-1 items-center justify-center">
              <div className="g-card min-w-[350px]">
                <Logo />
                <div class="flex w-full flex-col px-[var(--space-xxl)] text-center">
                  <span class="w-full text-[24px] font-medium">
                    Welcome to Graphite
                  </span>
                  <span class="mt-2 w-full">
                    Checking status of Graphite Web
                    {loadingStep && <LoadingDots />}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SplashScreenProvider>
  );
};

render(<App />, mountPoint!);
