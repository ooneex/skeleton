import type { SVGProps } from "react";

export const SwordIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M11.9559 20.6716L13.6421 18.9853L9.39949 14.7426L5.15685 10.5L3.47057 12.1863L5 16L2 20L4 22L8 18.9853L11.9559 20.6716Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M9.34315 9.00001L15.8432 2.5L21.5 2.5L21.5 8.15685L15 14.6569"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M12 12L15.8891 8.11091" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
