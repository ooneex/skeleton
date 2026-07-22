import type { SVGProps } from "react";

export const Users3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="7.5" cy="8.5" r="3.5" strokeWidth="0" fill="currentColor" />
      <circle cx="16" cy="5" r="4" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m16,11c-1.838,0-3.507.717-4.758,1.88,2.813,1.387,4.758,4.277,4.758,7.62v2.5h7v-5c0-3.86-3.14-7-7-7Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m7.5,14c-3.584,0-6.5,2.916-6.5,6.5v2.5h13v-2.5c0-3.584-2.916-6.5-6.5-6.5Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
