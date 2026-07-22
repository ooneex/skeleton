import type { SVGProps } from "react";

export const Shapes2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="18.5" cy="8.5" r="5.5" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="5" y="14" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <polygon points="6 .984 .276 11 11.724 11 6 .984" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
