import type { SVGProps } from "react";

export const LetterEIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15 11V13H6V11H15Z" fill="currentColor" />
      <path d="M19 2V4H8V20H19V22H6V2H19Z" fill="currentColor" />
    </svg>
  );
};
