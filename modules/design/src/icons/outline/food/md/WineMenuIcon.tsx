import type { SVGProps } from "react";

export const WineMenuIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M8 6H13" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M19 10H23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22 14H23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M5 18H11V24H5" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M13 3V12L13.2649 12.0883C14.8983 12.6328 16 14.1613 16 15.883V29H5V15.883C5 14.1613 6.10172 12.6328 7.73509 12.0883L8 12V3C8 2.44771 8.44772 2 9 2H12C12.5523 2 13 2.44771 13 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M20 27L28 27L28 5L17 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
