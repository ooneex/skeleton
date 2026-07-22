import type { SVGProps } from "react";

export const GridIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="2" y="2" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="13" width="9" height="9" rx="2" ry="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="13" y="2" width="9" height="9" rx="2" ry="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="13" y="13" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
