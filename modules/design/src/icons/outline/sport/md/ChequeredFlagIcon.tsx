import type { SVGProps } from "react";

export const ChequeredFlagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M21 6L19.3956 22" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M13 6L11.3956 22" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M28 14L4.5 14" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M5.50002 6H29L27.3956 22H3.70056" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M3 30L6 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
