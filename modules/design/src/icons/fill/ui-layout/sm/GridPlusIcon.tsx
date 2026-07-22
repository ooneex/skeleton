import type { SVGProps } from "react";

export const GridPlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="2" y="2" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <rect x="13" y="2" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="13" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <polygon
        points="22 16.5 18.5 16.5 18.5 13 16.5 13 16.5 16.5 13 16.5 13 18.5 16.5 18.5 16.5 22 18.5 22 18.5 18.5 22 18.5 22 16.5"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
