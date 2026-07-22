import type { SVGProps } from "react";

export const ArchedWindowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7.5 5.5L16 14L24.5 5.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M28 22H4" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M28 30L28 14C28 7.37258 22.6274 2 16 2C9.37259 2 4 7.37258 4 14L4 30L28 30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M4 14H28" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" data-cap="butt" fill="none" />
      <path d="M16 2V30" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" data-cap="butt" fill="none" />
    </svg>
  );
};
