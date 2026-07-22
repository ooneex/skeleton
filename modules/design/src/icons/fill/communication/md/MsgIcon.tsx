import type { SVGProps } from "react";

export const MsgIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m16,3C7.729,3,1,8.832,1,16c0,2.4.76,4.733,2.203,6.776l-1.547,6.568,7.511-1.769c2.105.934,4.459,1.425,6.833,1.425,8.271,0,15-5.832,15-13S24.271,3,16,3Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
