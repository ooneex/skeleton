import type { SVGProps } from "react";

export const ChequeredFlagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3.78668 5H21.7895L20.5 17H2.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M15.7747 4.89026L14.5 17" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M9.77471 4.89026L8.5 17" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M21.1211 11L3.15166 11" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M2 22L4 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
