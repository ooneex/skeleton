import type { SVGProps } from "react";

export const GridCheckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="2" y="2" width="12" height="12" rx="2.5" ry="2.5" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="18" width="12" height="12" rx="2.5" ry="2.5" strokeWidth="0" fill="currentColor" />
      <rect x="18" y="18" width="12" height="12" rx="2.5" ry="2.5" strokeWidth="0" fill="currentColor" />
      <polygon
        points="21.965 12.996 17.59 7.892 19.108 6.59 22.035 10.004 29.957 1.586 31.413 2.957 21.965 12.996"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
