import type { SVGProps } from "react";

export const LetterTIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11 2H13V22H11V2Z" fill="currentColor" />
      <path d="M20 2V4H4V2H20Z" fill="currentColor" />
    </svg>
  );
};
