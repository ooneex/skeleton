import type { SVGProps } from "react";

export const BullhornIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m22.503,6.413l-1.503-.875v6.923l1.503-.875c.924-.537,1.497-1.529,1.497-2.587s-.573-2.05-1.497-2.587Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m6,17v4c0,1.105.895,2,2,2h0c1.105,0,2-.895,2-2v-4h-4Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path d="m6,3C2.691,3,0,5.691,0,9s2.691,6,6,6V3Z" strokeWidth="0" fill="currentColor" />
      <path d="m17,1c0,1.103-.897,2-2,2h-7v12h7c1.103,0,2,.897,2,2h2V1h-2Z" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
