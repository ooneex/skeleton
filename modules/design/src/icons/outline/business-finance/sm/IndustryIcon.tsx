import type { SVGProps } from "react";

export const IndustryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14.5 11L14.5 14L21 11V21H8V14L14.5 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M4 5C4 2.79067 6.12053 1 8.73684 1C10.24 1 11.5774 1.59333 12.445 2.51533C13.1413 1.99333 14.0484 1.66667 15.0526 1.66667C17.2324 1.66667 19 3.15933 19 5H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M3 21H8V9H4L3 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M17 17H16.99"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
