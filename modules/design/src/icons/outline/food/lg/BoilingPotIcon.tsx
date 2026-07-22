import type { SVGProps } from "react";

export const BoilingPotIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M41 20H46" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M7 20H2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M31 16V11L17 11V16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M7 31.5455L9.02085 30.2015C13.7807 27.036 19.9547 26.9568 24.7942 29.9993V29.9993C28.7852 32.5084 33.7458 32.9243 38.099 31.1149L41 29.9091"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M24 6V2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path d="M36 7V4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path d="M12 7V4" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M41 38V16H7V38C7 40.7614 9.23858 43 12 43H36C38.7614 43 41 40.7614 41 38Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
