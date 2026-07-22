import type { SVGProps } from "react";

export const MapPin2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M21 17V29L21 27" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M11 17V24V23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M26 6.05556L30 4.5V25.5L21 29L11 24L2 27.5V6.5L6.19147 4.86998"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 15C19.492 12.6222 22 9.91549 22 6.74359C22 3.57169 19.3135 1 16 1C12.6865 1 10 3.57169 10 6.74359C10 9.91549 12.508 12.6222 16 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 8.5C16.8284 8.5 17.5 7.82843 17.5 7C17.5 6.17157 16.8284 5.5 16 5.5C15.1716 5.5 14.5 6.17157 14.5 7C14.5 7.82843 15.1716 8.5 16 8.5Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
