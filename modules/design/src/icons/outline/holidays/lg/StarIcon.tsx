import type { SVGProps } from "react";

export const StarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 7L28.0385 19.9469H41.5L30.8035 28.0139L35.0075 41L24 32.9735L12.9925 41L17.1965 28.0139L6.5 19.9469H19.9615L24 7Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
