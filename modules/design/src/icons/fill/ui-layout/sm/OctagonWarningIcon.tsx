import type { SVGProps } from "react";

export const OctagonWarningIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m16.556,1H7.444L1,7.444v9.111l6.444,6.444h9.111l6.444-6.444V7.444l-6.444-6.444Zm-5.556,5h2v8h-2V6Zm1,12c-.689,0-1.25-.561-1.25-1.25s.561-1.25,1.25-1.25,1.25.561,1.25,1.25-.561,1.25-1.25,1.25Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
