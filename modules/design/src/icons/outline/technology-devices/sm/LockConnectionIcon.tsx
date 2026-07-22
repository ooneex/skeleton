import type { SVGProps } from "react";

export const LockConnectionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 12H4C2.89543 12 2 12.8954 2 14V20C2 21.1046 2.89543 22 4 22H16C17.1046 22 18 21.1046 18 20V14C18 12.8954 17.1046 12 16 12Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M6 12V9C6 6.79086 7.79086 5 10 5V5C12.2091 5 14 6.79086 14 9V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M23 7C23 3.68629 20.3137 0.999999 17 1"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M19 7C19 5.89543 18.1046 5 17 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M10 16V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
