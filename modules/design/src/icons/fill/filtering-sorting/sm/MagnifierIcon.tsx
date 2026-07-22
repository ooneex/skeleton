import type { SVGProps } from "react";

export const MagnifierIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect
        x="16.75"
        y="12.861"
        width="2"
        height="9.778"
        transform="translate(-7.352 17.75) rotate(-45)"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m10,18c-4.411,0-8-3.589-8-8S5.589,2,10,2s8,3.589,8,8-3.589,8-8,8Zm0-14c-3.309,0-6,2.691-6,6s2.691,6,6,6,6-2.691,6-6-2.691-6-6-6Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <circle cx="10" cy="10" r="4" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
