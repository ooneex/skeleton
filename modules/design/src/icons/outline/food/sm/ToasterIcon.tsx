import type { SVGProps } from "react";

export const ToasterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5 20V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M19 20V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17 14V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M19 10L5 10C3.89543 10 3 10.8954 3 12L3 20L21 20L21 12C21 10.8954 20.1046 10 19 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M6 6L6 5C6 3.89543 6.89543 3 8 3L16 3C17.1046 3 18 3.89543 18 5L18 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 15.25C6 14.5596 6.55964 14 7.25 14C7.94036 14 8.5 14.5596 8.5 15.25C8.5 15.9404 7.94036 16.5 7.25 16.5C6.55964 16.5 6 15.9404 6 15.25Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
