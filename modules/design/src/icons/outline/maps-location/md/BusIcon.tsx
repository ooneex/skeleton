import type { SVGProps } from "react";

export const BusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10 3L12 6H20L22 3"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M31 12H29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M3 12H1" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M29 27.5V6C29 4.34315 27.6569 3 26 3H6C4.34315 3 3 4.34315 3 6V27.5C3 28.3284 3.67157 29 4.5 29H7.5C8.32843 29 9 28.3284 9 27.5V26H23V27.5C23 28.3284 23.6716 29 24.5 29H27.5C28.3284 29 29 28.3284 29 27.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M3 15H29" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M26 21C26 22.1046 25.1046 23 24 23C22.8954 23 22 22.1046 22 21C22 19.8954 22.8954 19 24 19C25.1046 19 26 19.8954 26 21Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M10 21C10 22.1046 9.10457 23 8 23C6.89543 23 6 22.1046 6 21C6 19.8954 6.89543 19 8 19C9.10457 19 10 19.8954 10 21Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
