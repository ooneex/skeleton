import type { SVGProps } from "react";

export const GridRectCircleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="2" y="2" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <rect x="13" y="13" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <circle cx="17.5" cy="6.5" r="4.5" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="6.5" cy="17.5" r="4.5" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
