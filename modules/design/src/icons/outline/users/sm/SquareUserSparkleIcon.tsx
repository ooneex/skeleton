import type { SVGProps } from "react";

export const SquareUserSparkleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M6.08289 21C6.55889 18.1621 9.02666 16 11.9999 16C14.9732 16 17.441 18.1621 17.917 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M13.5 8.5L12 5L10.5 8.5L7 10L10.5 11.5L12 15L13.5 11.5L17 10L13.5 8.5Z"
        fill="currentColor"
        data-color="color-2"
        data-stroke="none"
        data-cap="butt"
      />
      <path
        d="M5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
