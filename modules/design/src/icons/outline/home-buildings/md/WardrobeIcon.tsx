import type { SVGProps } from "react";

export const WardrobeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M5 19H16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M16 1.99999V30" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M11 23L10 23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M20 17L20 15"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24 2L8.00002 2C6.34316 2 5.00002 3.34315 5.00002 5L5.00001 27C5.00001 28.6569 6.34316 30 8.00001 30L24 30C25.6569 30 27 28.6569 27 27L27 5C27 3.34315 25.6569 2 24 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
