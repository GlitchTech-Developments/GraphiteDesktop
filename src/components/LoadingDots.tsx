"use client";

import { useEffect, useState } from "react";

const LoadingDots = () => {
  const [loadingStep, setLoadingStep] = useState<number>(1);

  const dots = Array(loadingStep)
    .fill(0)
    .map((_, i) => (
      <span key={i} className="animate-pulse">
        .
      </span>
    ));

  useEffect(() => {
    if (loadingStep < 3) {
      setTimeout(() => {
        setLoadingStep((prev: number) => prev + 1);
      }, 750);
    } else {
      setTimeout(() => {
        setLoadingStep(1);
      }, 750);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingStep]);

  return <span className="text-[#8e8e8e]">{dots}</span>;
};

export default LoadingDots;
