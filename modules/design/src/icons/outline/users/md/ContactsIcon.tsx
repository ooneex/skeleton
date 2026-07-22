import type { SVGProps } from "react";

export const ContactsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M27 27L27 5C27 3.34315 25.6569 2 24 2L8 2C6.34315 2 5 3.34315 5 5L5 27C5 28.6569 6.34315 30 8 30L24 30C25.6569 30 27 28.6569 27 27Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 14C17.6569 14 19 12.6569 19 11C19 9.34315 17.6569 8 16 8C14.3431 8 13 9.34315 13 11C13 12.6569 14.3431 14 16 14Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M16 17C12.6863 17 10 19.6863 10 23H22C22 19.6863 19.3137 17 16 17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M31 5V27"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M1 5V27" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
    </svg>
  );
};
