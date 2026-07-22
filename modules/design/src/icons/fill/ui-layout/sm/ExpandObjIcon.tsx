import type { SVGProps } from "react";

export const ExpandObjIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon points="3 10 1 10 1 1 10 1 10 3 3 3 3 10" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <polygon
        points="23 23 14 23 14 21 21 21 21 14 23 14 23 23"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <rect x="6" y="6" width="12" height="12" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
