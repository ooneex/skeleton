import type { SVGProps } from "react";

export const HalfDottedCircleOneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polyline
        points="9.5 9.5 11.565 8 12 8 12 16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <circle cx="16.067" cy="2.865" r="1" fill="currentColor" strokeWidth="0" data-color="color-2" data-cap="butt" />
      <circle cx="19.431" cy="5.309" r="1" fill="currentColor" strokeWidth="0" data-color="color-2" data-cap="butt" />
      <circle cx="21.511" cy="8.91" r="1" fill="currentColor" strokeWidth="0" data-color="color-2" data-cap="butt" />
      <circle cx="21.945" cy="13.045" r="1" fill="currentColor" strokeWidth="0" data-color="color-2" data-cap="butt" />
      <circle cx="20.66" cy="17" r="1" fill="currentColor" strokeWidth="0" data-color="color-2" data-cap="butt" />
      <path
        d="m12,2c-5.523,0-10,4.477-10,10s4.477,10,10,10c2.197,0,4.228-.708,5.878-1.909"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
