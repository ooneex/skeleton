import type { SVGProps } from "react";

export const PillBottleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7 20V38C7 40.7614 9.23858 43 12 43H36C38.7614 43 41 40.7614 41 38V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M12 15V10" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M20 15V10" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M28 15V10" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M36 15V10" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M43 5H5V15H43V5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M21 26L21 21H27L27 26H32L32 32H27V37H21V32H16L16 26H21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
