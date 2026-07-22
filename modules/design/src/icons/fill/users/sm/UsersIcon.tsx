import type { SVGProps } from "react";

export const UsersIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="16.5" cy="4.5" r="3.5" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="7.5" cy="10" r="3.5" strokeWidth="0" fill="currentColor" />
      <path
        d="m16.5,9.5c-1.301,0-2.511.388-3.528,1.049-.132,1.318-.731,2.5-1.629,3.379,1.548.789,2.808,2.046,3.631,3.572h7.914l.083-.909c.018-.195.03-.392.03-.591,0-3.584-2.916-6.5-6.5-6.5Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m7.5,15c-3.584,0-6.5,2.916-6.5,6.5,0,.2.012.396.03.591l.083.909h12.774l.083-.909c.018-.195.03-.392.03-.591,0-3.584-2.916-6.5-6.5-6.5Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
