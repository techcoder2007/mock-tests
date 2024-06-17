import { cn } from "@/lib/utils";
import React from "react";

interface ISVGProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export const LoadingSpinner = (props: ISVGProps) => {
  const { className, size = 24 } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("animate-spin", className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};