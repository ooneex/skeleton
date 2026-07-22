import type { SVGProps } from "react";

export const MirrorWithFrameIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3 19H21" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M3 9H7" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M17 9H21" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M15.5 3L8.5 3C7.67157 3 7 3.67157 7 4.5L7 13.5C7 14.3284 7.67157 15 8.5 15L15.5 15C16.3284 15 17 14.3284 17 13.5L17 4.5C17 3.67157 16.3284 3 15.5 3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M3 21L3 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M21 3L21 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M17 6L8 15" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
    </svg>
  );
};
