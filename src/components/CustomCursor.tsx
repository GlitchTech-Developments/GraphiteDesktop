"use client";

import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
  return (
    <div className="absolute z-[2]">
      <AnimatedCursor
        innerSize={0}
        innerScale={1}
        outerSize={150}
        outerScale={1}
        outerStyle={{
          mixBlendMode: "lighten",
          background: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(5px), brightness(200%)",
          boxShadow: "0px 0px 30px 10px rgba(255, 255, 255, 0.1)",
          backgroundClip: "padding-box",
          cursor: "none",
          userSelect: "none",
        }}
      />
    </div>
  );
};

export default CustomCursor;
