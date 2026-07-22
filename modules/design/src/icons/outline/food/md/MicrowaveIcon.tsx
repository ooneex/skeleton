import type { SVGProps } from "react";

export const MicrowaveIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M27 5H5C3.34315 5 2 6.34315 2 8V24C2 25.6569 3.34315 27 5 27H27C28.6569 27 30 25.6569 30 24V8C30 6.34315 28.6569 5 27 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M21 10H7V22H21V10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M26 12H25" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M26 16H25" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M26 20H25" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M17 14L17 18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
