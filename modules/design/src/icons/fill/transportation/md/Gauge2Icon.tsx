import type { SVGProps } from "react";

export const Gauge2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m16,1C7.729,1,1,7.729,1,16s6.729,15,15,15,15-6.729,15-15S24.271,1,16,1Zm0,18c-1.657,0-3-1.343-3-3,0-.462.113-.895.3-1.286l-6.214-6.214,1.414-1.414,6.214,6.214c.391-.187.824-.3,1.286-.3,1.657,0,3,1.343,3,3s-1.343,3-3,3Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
