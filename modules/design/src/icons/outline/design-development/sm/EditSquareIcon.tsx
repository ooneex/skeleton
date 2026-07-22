import type { SVGProps } from "react";

export const EditSquareIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M7 4.5H17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M7 19.5H17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M19.5 7L19.5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M4.5 7L4.5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M7 2H2V7H7V2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M7 17H2V22H7V17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22 2H17V7H22V2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22 17H17V22H22V17Z"
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
