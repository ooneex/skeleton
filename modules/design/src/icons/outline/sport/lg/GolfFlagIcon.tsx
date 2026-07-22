import type { SVGProps } from "react";

export const GolfFlagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M22 34C22 32.6193 19.7614 31.5 17 31.5C14.2386 31.5 12 32.6193 12 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M17 36.5V4L30 10L17.25 16.5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M22 34C22 35.3807 19.7614 36.5 17 36.5C14.2386 36.5 12 35.3807 12 34"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M22 25.0403C22.6583 25.0136 23.3254 25 24 25C35.598 25 45 29.0294 45 34C45 38.9706 35.598 43 24 43C12.402 43 3 38.9706 3 34C3 30.9416 6.55955 28.2395 12 26.6132"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M32.5 36C33.8807 36 35 34.8807 35 33.5C35 32.1193 33.8807 31 32.5 31C31.1193 31 30 32.1193 30 33.5C30 34.8807 31.1193 36 32.5 36Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
