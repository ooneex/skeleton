import type { SVGProps } from "react";

export const Box3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9.31104 9.41694L33.4999 21.5V30.5L39.4999 27L39.4999 18.5L15.311 6.41696"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M26 26V44.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M46 15V31.0436C46 32.8671 45.0073 34.546 43.4096 35.4247L26 45L4.76393 34.382C3.07001 33.535 2 31.8037 2 29.9098L2 13L22 3L46 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path d="M46 15L26 26L2 14" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
    </svg>
  );
};
