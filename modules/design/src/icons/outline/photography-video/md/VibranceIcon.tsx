import type { SVGProps } from "react";

export const VibranceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15.9999 3.5L30 28H2L15.9999 3.5Z" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M16 22C17.6569 22 19 20.6569 19 19C19 17.3431 17.6569 16 16 16C14.3431 16 13 17.3431 13 19C13 20.6569 14.3431 22 16 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
