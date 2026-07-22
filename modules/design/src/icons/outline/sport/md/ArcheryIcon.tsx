import type { SVGProps } from "react";

export const ArcheryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M30 16H20" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M15.5 4.00005L6.66669 16L15.5 28" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M16 16H2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M26 12L30 16L26 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M14 2.5C17.7026 5.9304 20 10.7115 20 16C20 21.2885 17.7026 26.0696 14 29.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
