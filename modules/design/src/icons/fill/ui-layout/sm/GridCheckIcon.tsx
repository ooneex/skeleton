import type { SVGProps } from "react";

export const GridCheckIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="16.5 10.414 12.836 6.75 14.25 5.336 16.5 7.586 22 2.086 23.414 3.5 16.5 10.414"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <rect x="2" y="2" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <rect x="13" y="13" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="13" width="9" height="9" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
