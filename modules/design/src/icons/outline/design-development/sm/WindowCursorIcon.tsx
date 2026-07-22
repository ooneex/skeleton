import type { SVGProps } from "react";

export const WindowCursorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M2 8H22" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" data-cap="butt" fill="none" />
      <path
        d="M5.5 20L4 20C2.89543 20 2 19.1046 2 18L2 6C2 4.89543 2.89543 4 4 4L20 4C21.1046 4 22 4.89543 22 6L22 18C22 19.1046 21.1046 20 20 20L18.5 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M8.4641 11L15.6782 15.4952L13.08 16.9953L15.3301 20.8923L13.5981 21.8923L11.348 17.9953L8.75 19.4952L8.4641 11Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
