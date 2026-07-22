import type { SVGProps } from "react";

export const BookmarksIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m14,5H6c-1.654,0-3,1.346-3,3v15.869l7-4.667,7,4.667v-15.869c0-1.654-1.346-3-3-3Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m21,19h-2V6c0-1.654-1.346-3-3-3h-8V1h8c2.757,0,5,2.243,5,5v13Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
