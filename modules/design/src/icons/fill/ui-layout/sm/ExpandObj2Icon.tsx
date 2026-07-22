import type { SVGProps } from "react";

export const ExpandObj2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="6" y="6" width="12" height="12" rx="2" ry="2" strokeWidth="0" fill="currentColor" />
      <polygon
        points="23 10 21 10 21 3 14 3 14 1 23 1 23 10"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <polygon
        points="10 23 1 23 1 14 3 14 3 21 10 21 10 23"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
