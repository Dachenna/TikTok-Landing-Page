import { useEffect } from "react";

export const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2200); // Adjust duration as needed
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 z-50">
      {/* Infinity SVG */}
      <svg
        width="120"
        height="60"
        viewBox="0 0 120 60"
        fill="none"
        className="animate-spin-infinity"
      >
        <path
          d="M20,30 Q20,10 40,10 Q60,10 60,30 Q60,50 80,50 Q100,50 100,30 Q100,10 80,10 Q60,10 60,30 Q60,50 40,50 Q20,50 20,30 Z"
          stroke="url(#infinityGradient)"
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="infinityGradient" x1="20" y1="10" x2="100" y2="50" gradientUnits="userSpaceOnUse">
            <stop stopColor="#38bdf8" />
            <stop offset="0.5" stopColor="#ec4899" />
            <stop offset="1" stopColor="#a78bfa" />
          </linearGradient>
        </defs>
      </svg>
      <span className="mt-8 text-white text-xl font-semibold tracking-widest animate-pulse">
        Loading...
      </span>
      {/* Custom animation */}
      <style>
        {`
          @keyframes spin-infinity {
            0% { transform: rotate(0deg) scale(1);}
            50% { transform: rotate(180deg) scale(1.08);}
            100% { transform: rotate(360deg) scale(1);}
          }
          .animate-spin-infinity {
            animation: spin-infinity 1.8s cubic-bezier(.77,0,.18,1) infinite;
          }
        `}
      </style>
    </div>
  );
};