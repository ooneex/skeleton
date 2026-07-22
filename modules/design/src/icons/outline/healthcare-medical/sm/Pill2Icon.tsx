import type { SVGProps } from "react";

export const Pill2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M8 8L16 16" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M11.7782 20L20 11.7782C22.1479 9.6303 22.1479 6.1479 20 4.00002C17.8521 1.85213 14.3697 1.85213 12.2218 4.00001L4 12.2218C1.85212 14.3697 1.85212 17.8521 4 20C6.14788 22.1479 9.63028 22.1479 11.7782 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
