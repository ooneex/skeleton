import type { SVGProps } from "react";

export const LevelsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M13 29L16 26L19 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M23 29L26 26L29 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M3 29L6 26L9 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M13.5 21.0001V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M18.5 20.9999V14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M23.5 21L23.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3.5 21V8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M28.5 21L28.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M8.5 21V16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
