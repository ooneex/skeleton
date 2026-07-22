import type { SVGProps } from "react";

export const MsgIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m12,3C6.477,3,2,7.029,2,12c0,1.843.618,3.556,1.675,4.983l-1.224,4.566,5.287-1.417c1.294.551,2.735.868,4.262.868,5.523,0,10-4.029,10-9S17.523,3,12,3Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
