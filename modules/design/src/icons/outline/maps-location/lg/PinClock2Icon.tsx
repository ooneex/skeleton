import type { SVGProps } from "react";

export const PinClock2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M8 19.9032C8 32.8056 24 45 24 45C24 45 40 32.836 40 19.9032C40 9.7642 31.7993 4 24 4C16.2007 4 8 9.7642 8 19.9032Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M24 14V20H30" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <circle
        cx="24"
        cy="20"
        r="11"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
