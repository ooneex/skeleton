import type { SVGProps } from "react";

export const TimelineVerticalIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="21" y="2" width="10" height="10" rx="2.5" ry="2.5" strokeWidth="0" fill="currentColor" />
      <rect x="21" y="20" width="10" height="10" rx="2.5" ry="2.5" strokeWidth="0" fill="currentColor" />
      <rect x="1" y="11" width="10" height="10" rx="2.5" ry="2.5" strokeWidth="0" fill="currentColor" />
      <polygon
        points="19 8 19 6 17 6 17 1 15 1 15 15 13 15 13 17 15 17 15 31 17 31 17 26 19 26 19 24 17 24 17 8 19 8"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
