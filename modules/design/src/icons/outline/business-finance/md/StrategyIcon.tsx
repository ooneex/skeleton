import type { SVGProps } from "react";

export const StrategyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11.6343 20.3658L28.0001 4" stroke="currentColor" strokeWidth="2" fill="none" data-cap="butt" />
      <path
        d="M4.5 4.5L12.5 12.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M19.5 19.5L27.5 27.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M12.5 4.5L4.5 12.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M27.5 19.5L19.5 27.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M28 11V4H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M8.5 28C10.9853 28 13 25.9853 13 23.5C13 21.0147 10.9853 19 8.5 19C6.01472 19 4 21.0147 4 23.5C4 25.9853 6.01472 28 8.5 28Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
