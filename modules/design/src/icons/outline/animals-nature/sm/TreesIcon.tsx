import type { SVGProps } from "react";

export const TreesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M15 8L14.7 8.5L18 3L22 11L20.5 11.5L22.5 17H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M8.99999 8L9.29999 8.5L5.99999 3L1.99999 11L3.49999 11.5L1.49999 17H3.99999"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M8 11.5L12 3L16 11.5L14.5 12L16.5 19H12H7.5L9.5 12L8 11.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M12 19V23"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
