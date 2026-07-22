import type { SVGProps } from "react";

export const TextToolIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 22V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M7 4.5H25" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M7 27.5H25" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M27.5 7L27.5 25" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M4.5 7L4.5 25" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
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
        d="M7 25H2V30H7V25Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M30 2H25V7H30V2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M30 25H25V30H30V25Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M11 11H21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
