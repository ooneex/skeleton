import type { SVGProps } from "react";

export const TriangleWarningIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m30.464,23L19.464,3.948c-.723-1.252-2.018-2-3.464-2s-2.741.748-3.464,2L1.536,23c-.723,1.252-.723,2.748,0,4,.723,1.252,2.018,2,3.464,2h21.998c1.446,0,2.741-.748,3.464-2,.724-1.252.724-2.748,0-4Zm-15.464-14h2v10h-2v-10Zm1,15c-.827,0-1.5-.673-1.5-1.5s.673-1.5,1.5-1.5,1.5.673,1.5,1.5-.673,1.5-1.5,1.5Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
