import type { SVGProps } from "react";

export const MakeupFoundationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M19 7V2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M13 7V2H24" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M11 12V7L21 7V12"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M22 30H10C8.34315 30 7 28.6569 7 27V15C7 13.3431 8.34315 12 10 12H22C23.6569 12 25 13.3431 25 15V27C25 28.6569 23.6569 30 22 30Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M21 26H11V18H21V26Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
