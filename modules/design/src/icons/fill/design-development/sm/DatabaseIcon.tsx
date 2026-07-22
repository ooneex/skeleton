import type { SVGProps } from "react";

export const DatabaseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m20,5v7c0,.58-2.803,2-8,2s-8-1.42-8-2v-7h-2v14c0,2.763,5.022,4,10,4s10-1.237,10-4V5h-2Zm-8,16c-5.197,0-8-1.42-8-2v-4.448c1.92.985,4.965,1.448,8,1.448s6.08-.463,8-1.448v4.448c0,.58-2.803,2-8,2Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <ellipse cx="12" cy="5" rx="10" ry="4" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
