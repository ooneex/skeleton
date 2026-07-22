import type { SVGProps } from "react";

export const ProgressBarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m1,15v4c0,1.105.895,2,2,2h18c1.105,0,2-.895,2-2v-4c0-1.105-.895-2-2-2H3c-1.105,0-2,.895-2,2Zm20,4h-9v-4h9v4Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <polygon points="6.132 2 12 10.803 17.868 2 6.132 2" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
