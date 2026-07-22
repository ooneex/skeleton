import type { SVGProps } from "react";

export const LetterHIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M19 11V13H5V11H19Z" fill="currentColor" />
      <path d="M5 2H7V22H5V2Z" fill="currentColor" />
      <path d="M17 2H19V22H17V2Z" fill="currentColor" />
    </svg>
  );
};
