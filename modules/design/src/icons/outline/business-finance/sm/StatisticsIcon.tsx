import type { SVGProps } from "react";

export const StatisticsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M2 9L9 3L15 8L22 2"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M15 21V16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 21V11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M9 21V11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 21V16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
