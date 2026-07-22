import type { SVGProps } from "react";

export const ImagePinIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9.5 15C10.8807 15 12 13.8807 12 12.5C12 11.1193 10.8807 10 9.5 10C8.11929 10 7 11.1193 7 12.5C7 13.8807 8.11929 15 9.5 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M15 5L5 5C3.34314 5 2 6.34314 2 8L2 24C2 25.6569 3.34314 27 5 27L27 27C28.6569 27 30 25.6569 30 24L30 16.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M25 15C28.492 12.6222 31 9.91549 31 6.74359C31 3.57169 28.3135 1 25 1C21.6865 1 19 3.57169 19 6.74359C19 9.91549 21.508 12.6222 25 15Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M25 8C25.5523 8 26 7.55228 26 7C26 6.44772 25.5523 6 25 6C24.4477 6 24 6.44772 24 7C24 7.55228 24.4477 8 25 8Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <path
        d="M25.5 27L17.5 17L12.5 23.5L10 20.5L5 26.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
