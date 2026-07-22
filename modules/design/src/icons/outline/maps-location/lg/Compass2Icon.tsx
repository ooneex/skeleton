import type { SVGProps } from "react";

export const Compass2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M24 41V45V44" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M24 7V3V3.99999" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M7 24L3 24L3.99999 24" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M41 24L45 24L44 24" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M18.75 18.75L29.2501 29.25"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M33 15L29.25 29.25L15 33L18.75 18.75L33 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24 45C35.598 45 45 35.598 45 24C45 12.402 35.598 3 24 3C12.402 3 3 12.402 3 24C3 35.598 12.402 45 24 45Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
