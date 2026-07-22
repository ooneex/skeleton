import type { SVGProps } from "react";

export const SoccerFieldIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 12.5V4.99997" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M16 27V19.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M30 11H24V21H30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M2 11H8V21H2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <rect x="2" y="5" width="28" height="22" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M16 19.5C17.933 19.5 19.5 17.933 19.5 16C19.5 14.067 17.933 12.5 16 12.5C14.067 12.5 12.5 14.067 12.5 16C12.5 17.933 14.067 19.5 16 19.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
