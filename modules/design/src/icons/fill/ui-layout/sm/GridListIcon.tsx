import type { SVGProps } from "react";

export const GridListIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="13" y="3" width="9" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="13" y="7" width="9" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="2" y="2" width="8" height="8" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="14" width="8" height="8" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <rect x="13" y="15" width="9" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="13" y="19" width="9" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
