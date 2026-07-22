import type { SVGProps } from "react";

export const BellIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m20,15v-6c0-4.411-3.589-8-8-8S4,4.589,4,9v6c0,1.103-.897,2-2,2v2h20v-2c-1.103,0-2-.897-2-2Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m8.538,21l.875,1.503c.537.924,1.528,1.497,2.587,1.497s2.05-.573,2.587-1.497l.875-1.503h-6.924Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
