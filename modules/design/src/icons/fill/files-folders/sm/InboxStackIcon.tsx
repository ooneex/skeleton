import type { SVGProps } from "react";

export const InboxStackIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="5" y="4" width="14" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="8" width="8" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m19,8H5c-1.654,0-3,1.346-3,3v9c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3v-9c0-1.654-1.346-3-3-3Zm-2,8H7v-4h2v2h6v-2h2v4Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
