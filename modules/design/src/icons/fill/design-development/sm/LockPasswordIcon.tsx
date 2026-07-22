import type { SVGProps } from "react";

export const LockPasswordIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m17,9h-2v-4c0-1.654-1.346-3-3-3s-3,1.346-3,3v4h-2v-4c0-2.757,2.243-5,5-5s5,2.243,5,5v4Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <circle cx="7.25" cy="22.5" r="1.5" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="2.5" cy="22.5" r="1.5" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="21.5" cy="22.5" r="1.5" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="12" cy="22.5" r="1.5" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="16.75" cy="22.5" r="1.5" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m17,8H7c-1.654,0-3,1.346-3,3v5c0,1.654,1.346,3,3,3h10c1.654,0,3-1.346,3-3v-5c0-1.654-1.346-3-3-3Zm-4,7h-2v-3h2v3Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
