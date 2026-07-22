import type { SVGProps } from "react";

export const StarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="23.95 9 14.964 9 12 -.289 9.036 9 .05 9 7.215 14.489 4.249 23.618 12 17.987 19.751 23.618 16.785 14.489 23.95 9"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
