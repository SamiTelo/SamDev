"use client";

import { ReactNode } from "react";
import { useTilt } from "../hooks/useTilt";


type Props = {
  children: ReactNode;
};

export const TiltCard = ({ children }: Props) => {
  const { ref, onMouseMove, onMouseLeave } = useTilt();

  return (
    <div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="transform-gpu transition-transform duration-200 ease-out will-change-transform"
    >
      {children}
    </div>
  );
};