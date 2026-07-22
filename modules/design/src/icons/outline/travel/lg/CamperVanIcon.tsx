import type { SVGProps } from "react";

export const CamperVanIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M23 26L45 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M8 26L14 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M8 36H3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <circle cx="33" cy="37" r="6" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M34 36.9999C34 37.5522 33.5523 37.9999 33 37.9999C32.4477 37.9999 32 37.5522 32 36.9999C32 36.4477 32.4477 35.9999 33 35.9999C33.5523 35.9999 34 36.4477 34 36.9999Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
      />
      <path
        d="M27.092 36H8V20.2361C8 19.4785 7.572 18.786 6.89443 18.4472L4.10557 17.0528C3.42801 16.714 3 16.0215 3 15.2639V10H40C42.7614 10 45 12.2386 45 15V36H38.9339"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M14 36V20H23V36" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M40 15L28 15L28 21L40 21L40 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
