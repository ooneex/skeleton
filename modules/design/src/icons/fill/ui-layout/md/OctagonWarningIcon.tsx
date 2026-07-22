import type { SVGProps } from "react";

export const OctagonWarningIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m22.213,1h-12.426L1,9.787v12.426l8.787,8.787h12.426l8.787-8.787v-12.426L22.213,1Zm-7.213,6h2v13h-2V7Zm1,18c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
