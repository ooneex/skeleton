import type { SVGProps } from "react";

export const FrankensteinFaceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 6V8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M15 6V8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M21 12H23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M1 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path d="M3.04281 7H20.9632" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M3 2L3 13C3 17.9706 7.02944 22 12 22C16.9706 22 21 17.9706 21 13V2H3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M10.5 12.5C10.5 13.3284 9.82843 14 9 14C8.17157 14 7.5 13.3284 7.5 12.5C7.5 11.6716 8.17157 11 9 11C9.82843 11 10.5 11.6716 10.5 12.5Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M16.5 12.5C16.5 13.3284 15.8284 14 15 14C14.1716 14 13.5 13.3284 13.5 12.5C13.5 11.6716 14.1716 11 15 11C15.8284 11 16.5 11.6716 16.5 12.5Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M11 17H13"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
