import type { SVGProps } from "react";

export const LevelsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10 22L12 20L14 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M18 22L20 20L22 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M2 22L4 20L6 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M10 15V2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M14 15V10" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M18 15L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M2 15V6" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M22 15L22 3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M6 15V12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
