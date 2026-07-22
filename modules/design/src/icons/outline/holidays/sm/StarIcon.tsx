import type { SVGProps } from "react";

export const StarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="12 3 14.234 10 21 10 15.615 14.125 17.849 21 12 16.751 6.151 21 8.385 14.125 3 10 9.766 10 12 3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
