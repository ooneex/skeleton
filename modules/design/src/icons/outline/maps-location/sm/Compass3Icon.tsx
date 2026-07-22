import type { SVGProps } from "react";

export const Compass3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M14 16.9795L18.5 18.5001L16.9795 14" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M14 7.0205L18.5 5.50001L16.9795 10" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M7.02054 10L5.49999 5.50001L10 7.02052"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M9.99998 16.9795L5.49996 18.5001L7.02051 14"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M12 2.5L15 9L21.5 12L15 15L12 21.5L9 15L2.5 12L9 9L12 2.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
