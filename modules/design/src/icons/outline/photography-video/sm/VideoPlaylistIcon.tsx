import type { SVGProps } from "react";

export const VideoPlaylistIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9.5 12.5L15.5 16L9.5 19.5V12.5Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M21 20L21 12C21 10.8954 20.1046 10 19 10L5 10C3.89543 10 3 10.8954 3 12L3 20C3 21.1046 3.89543 22 5 22L19 22C20.1046 22 21 21.1046 21 20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M7 2H17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path d="M5 6H19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
    </svg>
  );
};
