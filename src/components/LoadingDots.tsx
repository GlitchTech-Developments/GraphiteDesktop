"use client";

import { useEffect, useState } from "react";

const LoadingDots = () => {
  const [loadingStep, setLoadingStep] = useState<number>(1);

  useEffect(() => {
    if (loadingStep < 3) {
      const increment = () => {
        const current = loadingStep + 1;
        setLoadingStep(current);
        return current;
      };

      setInterval(increment, 750);
    } else {
      const increment = () => {
        setLoadingStep(1);
      };

      setTimeout(increment, 750);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingStep]);

  return (
    <span className="text-[#8e8e8e]">
      {Array(loadingStep)
        .fill(".")
        .map((_, i) => (
          <span
            key={i + new Date().getMilliseconds()}
            className="animate-pulse"
          >
            {_}
          </span>
        ))}
    </span>
  );
};

export default LoadingDots;
