import type { SVGProps } from "react";

export const Shapes2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="7" y="19" width="12" height="12" rx="2.5" ry="2.5" strokeWidth="0" fill="currentColor" />
      <polygon points="8 2.056 .233 15 15.767 15 8 2.056" strokeWidth="0" fill="currentColor" />
      <circle cx="25" cy="11" r="7" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
