import type { SVGProps } from "react";

export const LadderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M2.5 18H13" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M3.5 13H14" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M4.79346 8H15" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M13.2979 16H21" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M15 3H16H7.41907C6.4736 3 5.65728 3.66208 5.46214 4.5872L2 21H2.03125"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12.2539 21H12.2298L15.9983 3.00795C15.9993 3.00332 16.0034 3 16.0081 3H16.5809C17.5264 3 18.3427 3.66208 18.5379 4.5872L22 21H21.9727"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
