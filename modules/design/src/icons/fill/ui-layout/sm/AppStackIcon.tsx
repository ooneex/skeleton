import type { SVGProps } from "react";

export const AppStackIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="6 20 1 20 1 4 6 4 6 6 3 6 3 18 6 18 6 20"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <polygon
        points="23 20 18 20 18 18 21 18 21 6 18 6 18 4 23 4 23 20"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <rect x="5" y="2" width="14" height="20" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
