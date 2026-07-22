import type { SVGProps } from "react";

export const TriangleWarningIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M20.1049 7.15552L3.60955 34.5335C1.87754 37.4075 4.04293 41 7.50544 41H40.4946C43.9571 41 46.1225 37.4075 44.3905 34.5335L27.8966 7.15552C26.1646 4.28149 21.8369 4.28149 20.1049 7.15552Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M24 15V27"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24 34C24.5523 34 25 33.5523 25 33C25 32.4477 24.5523 32 24 32C23.4477 32 23 32.4477 23 33C23 33.5523 23.4477 34 24 34Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
      />
    </svg>
  );
};
