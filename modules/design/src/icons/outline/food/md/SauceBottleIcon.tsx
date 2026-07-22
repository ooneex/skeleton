import type { SVGProps } from "react";

export const SauceBottleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 25H23" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M9 20V20C13.4701 18.0843 18.5299 18.0843 23 20V20"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M9 13V27C9 28.6569 10.3431 30 12 30H20C21.6569 30 23 28.6569 23 27V13H9Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M13.5 5H11C9.89543 5 9 5.89543 9 7V9H23L23 7C23 5.89543 22.1046 5 21 5H18.5L17 1H14.9649L13.5 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
