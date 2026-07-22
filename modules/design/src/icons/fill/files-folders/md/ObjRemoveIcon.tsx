import type { SVGProps } from "react";

export const ObjRemoveIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="9" y="9" width="14" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m26,29H6c-2.206,0-4-1.794-4-4v-5h2v5c0,1.103.897,2,2,2h20c1.103,0,2-.897,2-2v-5h2v5c0,2.206-1.794,4-4,4Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
