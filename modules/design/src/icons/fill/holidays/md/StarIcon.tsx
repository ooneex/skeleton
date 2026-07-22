import type { SVGProps } from "react";

export const StarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="31.995 12 19.734 12 16 .07 12.266 12 .005 12 9.774 19.341 5.921 31.201 16 23.878 26.079 31.201 22.226 19.341 31.995 12"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
