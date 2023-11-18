"use client";

import { useEffect, useState } from "react";

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
  const [loadingStep, setLoadingStep] = useState(1);

  const LoadingDots = () => {
    const dots = Array(loadingStep).fill(".").join("");

    useEffect(() => {
      const timeout = setTimeout(() => {
        setLoadingStep((prev) => {
          if (prev === 3) {
            return 1;
          }

          return prev + 1;
        });
      }, 1000);

      return () => clearTimeout(timeout);
    }, []);

    return <span className="animate-pulse text-[#8e8e8e]">{dots}</span>;
  };

  return (
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
                  {loadingStep && <LoadingDots />}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
