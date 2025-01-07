"use client";

import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button
      className={className}
      onClick={() => {
        console.log("Button clicked");
      }}
    >
      {children}
    </button>
  );
};
