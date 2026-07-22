import type { SVGProps } from "react";

export const ScaleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M2 15.5H12" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path d="M20 15.5H30" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path d="M16 29V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M8 29H24"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24.9496 5.11932L24.98 5.05859L20 15C20.08 18 22 20 25 20C28 20 30 18 30 15L24.98 5H16H7L2 15C2 18 4 20 7 20C10 20 11.92 18 12 15L7.02344 5.03125L7.05309 5.09064"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
