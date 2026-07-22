import type { SVGProps } from "react";

export const VideoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H16C17.1046 21 18 20.1046 18 19V17.5L22 19V9L18 10.5V9C18 7.89543 17.1046 7 16 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M6.25 12.5C6.94036 12.5 7.5 11.9404 7.5 11.25C7.5 10.5596 6.94036 10 6.25 10C5.55964 10 5 10.5596 5 11.25C5 11.9404 5.55964 12.5 6.25 12.5Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M15 7V3H5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
