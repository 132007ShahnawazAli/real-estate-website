"use client";

import React, { useState, useRef, useEffect } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

const CHARS = "!<>-_\\/[]{}—=+*^?#________";

export default function Button({ label, className = "", onMouseEnter, onMouseLeave, ...props }: ButtonProps) {
  const [displayText, setDisplayText] = useState(label);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setDisplayText(label);
  }, [label]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onMouseEnter) onMouseEnter(e);
    let iteration = 0;
    clearInterval(intervalRef.current as NodeJS.Timeout);

    intervalRef.current = setInterval(() => {
      setDisplayText((prev) =>
        label
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return label[index];
            }
            if (label[index] === " ") return " ";
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration >= label.length) {
        clearInterval(intervalRef.current as NodeJS.Timeout);
      }

      iteration += 1 / 3;
    }, 30);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onMouseLeave) onMouseLeave(e);
    clearInterval(intervalRef.current as NodeJS.Timeout);
    setDisplayText(label);
  };

  return (
    <button
      className={`group w-[242px] h-[48px] bg-black hover:bg-zinc-900 transition-colors flex items-center justify-center gap-4 text-white font-spline text-sm uppercase cursor-pointer select-none ${className}`}
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:translate-x-1 transition-transform">
        <path d="M1.17969 0V5.52832H11.9766L9.18457 2.8623L9.12012 2.80176L9.18066 2.73633L9.83301 2.0293L9.89453 1.96191L9.96094 2.02441L14.1523 6.02539L14.2197 6.08984L14.1523 6.15527L9.96094 10.1553L9.89453 10.2178L9.83301 10.1504L9.18066 9.44336L9.12012 9.37793L9.18457 9.31738L11.9766 6.65234H0V0H1.17969Z" fill="white" />
      </svg>
      <span>{displayText}</span>
    </button>
  );
}
