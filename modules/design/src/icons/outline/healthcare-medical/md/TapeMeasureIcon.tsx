import type { SVGProps } from "react";

export const TapeMeasureIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M17 8V12" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M25 25V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M20 25V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M15 25V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M10 25V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M9.33333 12H30V25H7C4.23858 25 2 22.7614 2 20V8"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M9.5 12C13.6421 12 17 10.2091 17 8C17 5.79086 13.6421 4 9.5 4C5.35786 4 2 5.79086 2 8C2 10.2091 5.35786 12 9.5 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M9.5 9C10.8807 9 12 8.55228 12 8C12 7.44772 10.8807 7 9.5 7C8.11929 7 7 7.44772 7 8C7 8.55228 8.11929 9 9.5 9Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
