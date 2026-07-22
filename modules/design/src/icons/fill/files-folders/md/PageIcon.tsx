import type { SVGProps } from "react";

export const PageIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m25,1H7c-2.206,0-4,1.794-4,4v22c0,2.206,1.794,4,4,4h18c2.206,0,4-1.794,4-4V5c0-2.206-1.794-4-4-4Zm-1,25H8v-2h16v2Zm0-5H8v-2h16v2Zm0-5H8V6h16v10Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
