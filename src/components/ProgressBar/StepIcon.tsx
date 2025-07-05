import * as React from "react";

interface StepIconProps {
  src: string;
  alt?: string;
}

export function StepIcon({ src, alt = "Step icon" }: StepIconProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="object-contain shrink-0 self-stretch my-auto aspect-square w-[34px]"
    />
  );
} 