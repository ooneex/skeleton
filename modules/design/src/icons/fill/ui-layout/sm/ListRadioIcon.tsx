import type { SVGProps } from "react";

export const ListRadioIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="12" y="6" width="11" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="12" y="16" width="11" height="2" strokeWidth="0" fill="currentColor" />
      <path
        d="m5,11c-2.206,0-4-1.794-4-4S2.794,3,5,3s4,1.794,4,4-1.794,4-4,4Zm0-6c-1.103,0-2,.897-2,2s.897,2,2,2,2-.897,2-2-.897-2-2-2Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <circle cx="5" cy="17" r="4" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
