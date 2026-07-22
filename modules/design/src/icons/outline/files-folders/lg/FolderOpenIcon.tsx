import type { SVGProps } from "react";

export const FolderOpenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10.5 21L10 15H38L37.5 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M40.5 43L45 21L3 21L7.50001 43L23.9999 43L40.5 43Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M43 16V14C43 11.7909 41.2091 10 39 10H27L20 4L9 4C6.79086 4 5 5.79086 5 8V16"
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
