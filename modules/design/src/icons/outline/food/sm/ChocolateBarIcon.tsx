import type { SVGProps } from "react";

export const ChocolateBarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M19 12V7.5H18.5C15.7386 7.5 13.5 5.26142 13.5 2.5V2H7C5.89543 2 5 2.89543 5 4L5 12"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M5 16.5V20C5 21.1046 5.89543 22 7 22H17C18.1046 22 19 21.1046 19 20V16.5"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M3 17V12H21V17H20.5L12 15L3.5 17H3Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
