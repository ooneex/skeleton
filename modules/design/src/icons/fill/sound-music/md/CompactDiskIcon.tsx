import type { SVGProps } from "react";

export const CompactDiskIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m16,1C7.729,1,1,7.729,1,16s6.729,15,15,15,15-6.729,15-15S24.271,1,16,1Zm0,21c-3.314,0-6-2.686-6-6s2.686-6,6-6,6,2.686,6,6-2.686,6-6,6Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
