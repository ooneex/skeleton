import type { SVGProps } from "react";

export const BookmarksIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M21 35.7073L35 44V14C35 11.7909 33.2091 10 31 10H11C8.79086 10 7 11.7909 7 14V44L21 35.7073Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M41 38V13C41 8.02944 36.9706 4 32 4H17"
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
