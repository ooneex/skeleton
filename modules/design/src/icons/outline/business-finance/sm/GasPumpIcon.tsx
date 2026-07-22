import type { SVGProps } from "react";

export const GasPumpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M23 9H22V12H23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M18 21L18 5C18 3.89543 17.1046 3 16 3L6 3C4.89543 3 4 3.89543 4 5L4 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M2 21H20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M14 7H8V12H14V7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M18 12V14.5C18 15.8807 19.1193 17 20.5 17V17C21.8807 17 23 15.8807 23 14.5V7L21 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
