import type { SVGProps } from "react";

export const EditSquareIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 6H23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M9 26H23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M26 9L26 23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M6 9L6 23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M9 3H3V9H9V3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M9 23H3V29H9V23Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M29 3H23V9H29V3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M29 23H23V29H29V23Z"
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
