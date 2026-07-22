import type { SVGProps } from "react";

export const ImagesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4 29.5L9.77778 21.7419L13.6296 26.0968L21.8148 14L30 25.129"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M27 6H5C3.34315 6 2 7.34315 2 9V27C2 28.6569 3.34315 30 5 30H27C28.6569 30 30 28.6569 30 27V9C30 7.34315 28.6569 6 27 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M4 2L28 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M9.5 16C10.8807 16 12 14.8807 12 13.5C12 12.1193 10.8807 11 9.5 11C8.11929 11 7 12.1193 7 13.5C7 14.8807 8.11929 16 9.5 16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
