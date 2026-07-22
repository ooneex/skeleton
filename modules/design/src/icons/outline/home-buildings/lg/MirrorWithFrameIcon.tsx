import type { SVGProps } from "react";

export const MirrorWithFrameIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M7 38H41" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M7 18H12" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M36 18H41" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M31 5L17 5C14.2386 5 12 7.23858 12 10L12 28C12 30.7614 14.2386 33 17 33L31 33C33.7614 33 36 30.7614 36 28L36 10C36 7.23858 33.7614 5 31 5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M7 43L7 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M41 5L41 43"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M25 14L12 27L13 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M29 22L36 15L35 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
