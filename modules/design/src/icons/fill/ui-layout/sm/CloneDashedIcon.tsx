import type { SVGProps } from "react";

export const CloneDashedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m10,22h-1.5c-1.378,0-2.5-1.122-2.5-2.5v-3.5h2v3.5c0,.276.224.5.5.5h1.5v2Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <rect x="12" y="20" width="4" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m19.5,22h-1.5v-2h1.5c.276,0,.5-.224.5-.5v-1.5h2v1.5c0,1.378-1.122,2.5-2.5,2.5Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <rect x="20" y="12" width="2" height="4" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m22,10h-2v-1.5c0-.276-.224-.5-.5-.5h-3.5v-2h3.5c1.378,0,2.5,1.122,2.5,2.5v1.5Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <rect x="2" y="2" width="16" height="16" rx="2.5" ry="2.5" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
