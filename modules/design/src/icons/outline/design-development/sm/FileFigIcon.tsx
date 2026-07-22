import type { SVGProps } from "react";

export const FileFigIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M19 18.5H21V22H18.5C16.567 22 15 20.433 15 18.5C15 16.567 16.567 15 18.5 15H19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M11.5 15V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M3.5 22L3.5 15H7.5M6.5 18.5H4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M4 11L4 4C4 2.89543 4.89543 2 6 2L13 2L20 9L20 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M13 2V9H20" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
    </svg>
  );
};
