import type { SVGProps } from "react";

export const InboxStackIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="5" y="5" width="22" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="9" y="1" width="14" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m27,9H5c-2.206,0-4,1.794-4,4v13c0,2.206,1.794,4,4,4h22c2.206,0,4-1.794,4-4v-13c0-2.206-1.794-4-4-4Zm-4,11h-14v-4h2v2h10v-2h2v4Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
