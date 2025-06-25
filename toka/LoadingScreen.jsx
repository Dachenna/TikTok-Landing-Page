import React, { useEffect, useState } from "react";
import Logo from "./src/assets/Layer_2.png"; // Adjust the path as needed

export const LoadingScreen = () => {
  const [phase, setPhase] = useState("loading"); // "loading" | "split" | "fade"
  const [visible, setVisible] = useState(true);

  // After loading, trigger split, then fade out
  useEffect(() => {
    const timers = [];
    timers.push(setTimeout(() => setPhase("split"), 2000)); // Split after 1.8s
    timers.push(setTimeout(() => setPhase("fade"), 3000));  // Fade after split
    timers.push(setTimeout(() => setVisible(false), 3800)); // Hide after fade
    return () => timers.forEach(clearTimeout);
  }, []);

  if (!visible) return null;

  // CSS for splitting and rotating
  const getPartClass = (part) => {
    let base =
      "absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out";
    if (phase === "loading") {
      return (
        base +
        " rotate-0 translate-x-0 translate-y-0 opacity-100"
      );
    }
    if (phase === "split") {
      if (part === 0)
        return (
          base +
          " -rotate-12 -translate-x-10 -translate-y-8 opacity-100"
        );
      if (part === 1)
        return (
          base +
          " rotate-12 translate-x-10 -translate-y-8 opacity-100"
        );
      if (part === 2)
        return (
          base +
          " rotate-0 translate-y-10 opacity-100"
        );
    }
    if (phase === "fade") {
      return base + " opacity-0";
    }
    return base;
  };

  // Each part is a mask of the image
  const maskStyles = [
    // Top-left third
    "polygon(50% 0%, 0% 100%, 50% 60%)",
    // Top-right third
    "polygon(50% 0%, 100% 100%, 50% 60%)",
    // Bottom third
    "polygon(0% 100%, 100% 100%, 50% 60%)",
  ];

  return (
    <div className="bg-secondary fixed inset-0 z-50 flex items-center justify-center ">
      <div
        className={`relative w-32 h-32 ${
          phase === "loading" ? "animate-spin-slow" : ""
        }`}
      >
        {[0, 1, 2].map((i) => (
          <img
            key={i}
            src={Logo}
            alt="logo"
            className={getPartClass(i)}
            style={{
              WebkitClipPath: maskStyles[i],
              clipPath: maskStyles[i],
            }}
            draggable={false}
          />
        ))}
      </div>
    </div>
  );
};