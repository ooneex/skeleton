import type { SVGProps } from "react";

export const CarGalleryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect
        x="12"
        y="1"
        width="4"
        height="4"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <rect
        x="12"
        y="7"
        width="4"
        height="4"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <rect
        x="18"
        y="1"
        width="4"
        height="4"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <rect
        x="18"
        y="7"
        width="4"
        height="4"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M9 6H7.48806C6.60484 6 5.8262 6.57934 5.57241 7.4253L4.5 11L3.25722 11.4971C2.4979 11.8008 2 12.5363 2 13.3541V20C2 20.5523 2.44772 21 3 21H5C5.55228 21 6 20.5523 6 20V19H18V20C18 20.5523 18.4477 21 19 21H21C21.5523 21 22 20.5523 22 20V14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M1.00999 9H0.999995" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 14H8.01C8.01 15.1046 7.11457 16 6.01 16H4V14Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.01 14H16C16 15.1046 16.8954 16 18 16H20.01V14Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
