import type { SVGProps } from "react";

export const VenusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="16 18 13 18 13 14 11 14 11 18 8 18 8 20 11 20 11 23 13 23 13 20 16 20 16 18"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m12,16c-4.136,0-7.5-3.364-7.5-7.5S7.864,1,12,1s7.5,3.364,7.5,7.5-3.364,7.5-7.5,7.5Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
