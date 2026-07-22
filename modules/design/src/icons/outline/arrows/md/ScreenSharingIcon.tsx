import type { SVGProps } from "react";

export const ScreenSharingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 29V24" stroke="currentColor" strokeWidth="2" data-color="color-2" fill="none" data-cap="butt" />
      <path
        d="M15 4H27C28.657 4 30 5.343 30 7V21C30 22.657 28.657 24 27 24H5C3.343 24 2 22.657 2 21V17"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M23 29H9"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M2 4L11 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M10 4H2V12"
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
