import type { SVGProps } from "react";

export const ShieldLockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m16,.969L3,4.219v12.781c0,9.61,12.166,13.776,12.684,13.949l.316.105.316-.105c.518-.173,12.684-4.338,12.684-13.949V4.219L16,.969Zm6,19.031c0,1.103-.897,2-2,2h-8c-1.103,0-2-.897-2-2v-4c0-1.103.897-2,2-2v-3c0-2.206,1.794-4,4-4s4,1.794,4,4v3c1.103,0,2,.897,2,2v4Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path d="m18,11c0-1.103-.897-2-2-2s-2,.897-2,2v3h4v-3Z" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
