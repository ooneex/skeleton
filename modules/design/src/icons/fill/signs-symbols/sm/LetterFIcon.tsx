import type { SVGProps } from "react";

export const LetterFIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15 11V13H6V11H15Z" fill="currentColor" />
      <path d="M6 2H19V4H8V22H6V2Z" fill="currentColor" />
    </svg>
  );
};
