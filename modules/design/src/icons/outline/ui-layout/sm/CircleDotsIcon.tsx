import type { SVGProps } from "react";

export const CircleDotsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <circle cx="12" cy="12" r="1.25" fill="currentColor" strokeWidth="0" data-color="color-2" data-cap="butt" />
      <circle cx="6.75" cy="12" r="1.25" fill="currentColor" strokeWidth="0" data-color="color-2" data-cap="butt" />
      <circle cx="17.25" cy="12" r="1.25" fill="currentColor" strokeWidth="0" data-color="color-2" data-cap="butt" />
    </svg>
  );
};
