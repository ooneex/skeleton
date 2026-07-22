import type { SVGProps } from "react";

export const GiftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m22,1c-3.13,0-4.996,2.386-6,4.323-1.004-1.937-2.87-4.323-6-4.323-2.206,0-4,1.794-4,4s1.794,4,4,4h12c2.206,0,4-1.794,4-4s-1.794-4-4-4Zm-12,6c-1.103,0-2-.897-2-2s.897-2,2-2c2.473,0,3.914,2.446,4.58,4h-4.58Zm12,0h-4.58c.666-1.554,2.107-4,4.58-4,1.103,0,2,.897,2,2s-.897,2-2,2Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path d="m14,15H3v11c0,2.206,1.794,4,4,4h7v-15Z" strokeWidth="0" fill="currentColor" />
      <path d="m18,15v15h7c2.206,0,4-1.794,4-4v-11h-11Z" strokeWidth="0" fill="currentColor" />
      <rect x="1" y="7" width="30" height="6" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
