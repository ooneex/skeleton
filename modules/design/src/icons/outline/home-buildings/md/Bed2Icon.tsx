import type { SVGProps } from "react";

export const Bed2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M29 17V12C29 10.3431 27.6569 9 26 9H15V17"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M9 14C7.61833 14 6.5 12.8817 6.5 11.5C6.5 10.1183 7.61833 9 9 9C10.3817 9 11.5 10.1183 11.5 11.5C11.5 12.8817 10.3817 14 9 14Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M3 23H29" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 17H29" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 6L3 26" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M29 17L29 26" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
