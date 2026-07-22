import type { SVGProps } from "react";

export const ObjAddIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="23 9 17 9 17 3 15 3 15 9 9 9 9 11 15 11 15 17 17 17 17 11 23 11 23 9"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m26,29H6c-2.206,0-4-1.794-4-4v-5h2v5c0,1.103.897,2,2,2h20c1.103,0,2-.897,2-2v-5h2v5c0,2.206-1.794,4-4,4Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
