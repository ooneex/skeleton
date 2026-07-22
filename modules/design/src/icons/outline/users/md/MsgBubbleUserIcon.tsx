import type { SVGProps } from "react";

export const MsgBubbleUserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M29.5 2H15.5C14.6716 2 14 2.67157 14 3.5V13.2V16L18.25 13.2H29.5C30.3284 13.2 31 12.5284 31 11.7V3.5C31 2.67157 30.3284 2 29.5 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M7.5 21C9.15685 21 10.5 19.6569 10.5 18C10.5 16.3431 9.15685 15 7.5 15C5.84315 15 4.5 16.3431 4.5 18C4.5 19.6569 5.84315 21 7.5 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M13.417 29C12.941 26.1623 10.473 24 7.5 24C4.527 24 2.05904 26.1623 1.58296 29L3.07682 29.3787C5.9797 30.1146 9.0203 30.1146 11.9232 29.3787L13.417 29Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
    </svg>
  );
};
