import type { SVGProps } from "react";

export const LightSwitchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon points="12.975 16 19 16 19 9 13 9 12.975 16" strokeWidth="0" fill="currentColor" />
      <path
        d="m26,2H6c-2.206,0-4,1.794-4,4v20c0,2.206,1.794,4,4,4h20c2.206,0,4-1.794,4-4V6c0-2.206-1.794-4-4-4Zm-4.882,23h-10.236l-1.442-2.884,1.56-6.239V7h10v8.877l1.56,6.239-1.442,2.884Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
