import type { SVGProps } from "react";

export const DiamondIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10.5 12L15.8366 28.7712M16.1608 28.7712L21.478 12"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M21.6555 11.9544L25.5 4"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M10.3661 11.9544L6.52154 4"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M16.6411 4.0011L20.3603 12.0042" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M15.3805 4.0011L11.6612 12.0042" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M30 12H2" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M30.5 12.3333L16 29L1.5 12.3333L6.39864 4H25.6013L30.5 12.3333Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
