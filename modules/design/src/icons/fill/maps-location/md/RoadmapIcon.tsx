import type { SVGProps } from "react";

export const RoadmapIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m25.515,13h-.515v2c0,3.309-2.691,6-6,6h-10v4c0,2.206,1.794,4,4,4h12.515l5.714-8-5.714-8Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m19,3H6.485L.771,11l5.714,8h12.515c2.206,0,4-1.794,4-4V7c0-2.206-1.794-4-4-4Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
