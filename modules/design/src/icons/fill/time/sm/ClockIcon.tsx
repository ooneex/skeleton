import type { SVGProps } from "react";

export const ClockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m12,1C5.935,1,1,5.935,1,12s4.935,11,11,11,11-4.935,11-11S18.065,1,12,1Zm4.2,15.4l-5.2-3.9v-7.5h2v6.5l4.4,3.3-1.2,1.6Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
