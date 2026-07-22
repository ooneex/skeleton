import type { SVGProps } from "react";

export const TreeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 41.5V45"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M11.6364 22.5L24 4L36.3636 22.5L31.7273 23.3409L41 38L40.753 38.1017C30.0214 42.5206 17.9786 42.5206 7.247 38.1017L7 38L16.2727 23.3409L11.6364 22.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};
