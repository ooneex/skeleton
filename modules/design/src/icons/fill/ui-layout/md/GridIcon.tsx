import type { SVGProps } from "react";

export const GridIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="2" y="2" width="12" height="12" rx="2.5" ry="2.5" strokeWidth="0" fill="currentColor" />
      <rect x="18" y="18" width="12" height="12" rx="2.5" ry="2.5" strokeWidth="0" fill="currentColor" />
      <rect
        x="2"
        y="18"
        width="12"
        height="12"
        rx="2.5"
        ry="2.5"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <rect
        x="18"
        y="2"
        width="12"
        height="12"
        rx="2.5"
        ry="2.5"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
