import type { SVGProps } from "react";

export const HelmetIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M22.5 31V28L22.5 28.6667"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24.5 21.5C24.5 22.6046 23.6046 23.5 22.5 23.5C21.3954 23.5 20.5 22.6046 20.5 21.5C20.5 20.3954 21.3954 19.5 22.5 19.5C23.6046 19.5 24.5 20.3954 24.5 21.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M3.20488 15.1034L12.5552 13.7016C14.369 13.4297 16 14.8345 16 16.6685V21.5C16 25.0899 18.9101 28 22.5 28V28C26.0899 28 29 25.0899 29 21.5V16C29 8.8203 23.1797 3 16 3V3C8.8203 3 3 8.8203 3 16V17.7059V21.5788C3 23.4667 4.72292 24.8853 6.57572 24.523L15.874 22.7048"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
