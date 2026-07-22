import type { SVGProps } from "react";

export const CircleXmarkIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m16,1C7.729,1,1,7.729,1,16s6.729,15,15,15,15-6.729,15-15S24.271,1,16,1Zm6.414,20l-1.414,1.414-5-5-5,5-1.414-1.414,5-5-5-5,1.414-1.414,5,5,5-5,1.414,1.414-5,5,5,5Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
