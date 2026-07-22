import type { SVGProps } from "react";

export const CloudIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m15,3c-3.918,0-7.288,2.436-8.51,6.032-.159-.02-.322-.032-.49-.032-3.364,0-6,2.636-6,6s2.636,6,6,6h9c4.963,0,9-4.037,9-9S19.963,3,15,3Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
