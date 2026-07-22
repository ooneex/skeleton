import type { SVGProps } from "react";

export const PlaylistIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4 21H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M9.5 6.5L15.5 10L9.5 13.5V6.5Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M22 15L22 5C22 3.89543 21.1046 3 20 3L4 3C2.89543 3 2 3.89543 2 5L2 15C2 16.1046 2.89543 17 4 17L20 17C21.1046 17 22 16.1046 22 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
