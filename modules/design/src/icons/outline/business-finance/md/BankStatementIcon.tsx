import type { SVGProps } from "react";

export const BankStatementIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18.5 30V23H17V21L23 17.5L29 21V23H27.5V30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17 23H29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17 30H29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M23 23V30" stroke="currentColor" strokeWidth="2" data-color="color-2" fill="none" data-cap="butt" />
      <path
        d="M27 15L27 2L5 2L5 30L13 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M16 9L11 9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 9L20 9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M13 14L11 14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
