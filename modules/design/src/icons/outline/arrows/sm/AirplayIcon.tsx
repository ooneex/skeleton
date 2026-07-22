import type { SVGProps } from "react";

export const AirplayIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7.5 21H16.5L12 14L7.5 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M20 19C21.1046 19 22 18.1046 22 17V6C22 4.89543 21.1046 4 20 4L4 4C2.89543 4 2 4.89543 2 6L2 17C2 18.1046 2.89543 19 4 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
