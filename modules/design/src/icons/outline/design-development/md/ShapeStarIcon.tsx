import type { SVGProps } from "react";

export const ShapeStarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 2.5L20.1715 11.0586L29.5 12.4314L22.75 19.0929L24.343 28.5L16 24.0586L7.657 28.5L9.25 19.0929L2.5 12.4314L11.8285 11.0586L16 2.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
