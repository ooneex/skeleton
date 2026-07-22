import type { SVGProps } from "react";

export const ShieldCheckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m16,.969L3,4.219v12.781c0,9.61,12.166,13.776,12.684,13.949l.316.105.316-.105c.518-.173,12.684-4.338,12.684-13.949V4.219L16,.969Zm-2.459,20.985l-4.955-4.955,1.414-1.414,3.459,3.459,8.462-9.458,1.491,1.333-9.872,11.033Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
