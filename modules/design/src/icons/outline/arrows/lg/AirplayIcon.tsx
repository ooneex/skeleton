import type { SVGProps } from "react";

export const AirplayIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M38 38H40C42.7614 38 45 35.7614 45 33V12C45 9.23858 42.7614 7 40 7H8C5.23858 7 3 9.23858 3 12V33C3 35.7614 5.23858 38 8 38H10"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M13 43H35L24 26L13 43Z"
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
