import type { SVGProps } from "react";

export const CarGarageIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M22 21V15.3541C22 14.5363 21.5021 13.8008 20.7428 13.4971L19.5 13L18.4276 9.4253C18.1738 8.57934 17.3952 8 16.5119 8H7.48806C6.60485 8 5.8262 8.57934 5.57241 9.4253L4.5 13L3.25722 13.4971C2.4979 13.8008 2 14.5363 2 15.3541V21C2 21.5523 2.44772 22 3 22H5C5.55228 22 6 21.5523 6 21V20H18V21C18 21.5523 18.4477 22 19 22H21C21.5523 22 22 21.5523 22 21Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M23 11H22.99" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M1.00999 11H0.999995" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M2 6.5L12 1.5L22 6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M7.5 16.25C7.5 16.9404 6.94036 17.5 6.25 17.5C5.55964 17.5 5 16.9404 5 16.25C5 15.5596 5.55964 15 6.25 15C6.94036 15 7.5 15.5596 7.5 16.25Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M19 16.25C19 16.9404 18.4404 17.5 17.75 17.5C17.0596 17.5 16.5 16.9404 16.5 16.25C16.5 15.5596 17.0596 15 17.75 15C18.4404 15 19 15.5596 19 16.25Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
