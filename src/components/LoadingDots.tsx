"use client";

import { block } from "million/react-server";
import { useEffect, useState } from "react";

const LoadingDots = () => {
  const [loadingStep, setLoadingStep] = useState<number>(0);

  useEffect(() => {
    if (loadingStep < 3) {
      const increment = () => {
        const current = loadingStep + 1;
        setLoadingStep(current);
        return current;
      };

      setInterval(increment, 650);
    } else {
      const increment = () => {
        setLoadingStep(1);
      };

      setTimeout(increment, 650);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loadingStep]);

  const emptyArrayofLength = (length: number) => {
    const arr = [];
    for (let i = 0; i < length; i++) {
      arr.push(i);
    }
    return arr;
  };

  return (
    <span className="animate-pulse text-[#8e8e8e]">
      {emptyArrayofLength(loadingStep).map((_, i) => (
        <span key={i + new Date().getMilliseconds()}>.</span>
      ))}
    </span>
  );
};

export default block(LoadingDots);
