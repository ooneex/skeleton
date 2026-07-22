import type { SVGProps } from "react";

export const MsgContentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m12,2C5.935,2,1,6.486,1,12c0,1.836.548,3.615,1.588,5.175l-1.551,5.788,6.635-1.777c1.383.541,2.837.814,4.328.814,6.065,0,11-4.486,11-10S18.065,2,12,2Zm2,13h-7v-2h7v2Zm3-4H7v-2h10v2Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
