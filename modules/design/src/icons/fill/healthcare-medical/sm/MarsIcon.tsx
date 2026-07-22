import type { SVGProps } from "react";

export const MarsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="15 2 15 4 18.586 4 13.388 9.198 14.802 10.612 20 5.414 20 9 22 9 22 2 15 2"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m9.5,22c-4.136,0-7.5-3.364-7.5-7.5s3.364-7.5,7.5-7.5,7.5,3.364,7.5,7.5-3.364,7.5-7.5,7.5Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
