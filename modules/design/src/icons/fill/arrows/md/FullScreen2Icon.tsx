import type { SVGProps } from "react";

export const FullScreen2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="m4,11h-2v-5c0-2.206,1.794-4,4-4h5v2h-5c-1.103,0-2,.897-2,2v5Z" strokeWidth="0" fill="currentColor" />
      <path d="m30,11h-2v-5c0-1.103-.897-2-2-2h-5v-2h5c2.206,0,4,1.794,4,4v5Z" strokeWidth="0" fill="currentColor" />
      <path d="m26,30h-5v-2h5c1.103,0,2-.897,2-2v-5h2v5c0,2.206-1.794,4-4,4Z" strokeWidth="0" fill="currentColor" />
      <path d="m11,30h-5c-2.206,0-4-1.794-4-4v-5h2v5c0,1.103.897,2,2,2h5v2Z" strokeWidth="0" fill="currentColor" />
      <rect x="7" y="7" width="18" height="18" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
