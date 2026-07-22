import type { SVGProps } from "react";

export const Key2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="31.414 10 27.414 6 30.414 3 29 1.586 12.682 17.904 14.096 19.318 22 11.414 26 15.414 31.414 10"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m14.803,17.197c-1.416-1.417-3.3-2.197-5.303-2.197s-3.887.78-5.304,2.197c-2.924,2.924-2.924,7.682,0,10.606,1.417,1.417,3.301,2.197,5.304,2.197s3.887-.78,5.303-2.197c1.417-1.417,2.197-3.3,2.197-5.303s-.78-3.887-2.197-5.303Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
