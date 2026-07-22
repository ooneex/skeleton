import type { SVGProps } from "react";

export const Compass4Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M26 6L22 22L6 26L10 10L26 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M16 2V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M16 29V30" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M30 16L29 16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 16L2 16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M16 18.5C17.3807 18.5 18.5 17.3807 18.5 16C18.5 14.6193 17.3807 13.5 16 13.5C14.6193 13.5 13.5 14.6193 13.5 16C13.5 17.3807 14.6193 18.5 16 18.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
