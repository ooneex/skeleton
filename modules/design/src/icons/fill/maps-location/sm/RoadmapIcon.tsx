import type { SVGProps } from "react";

export const RoadmapIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m14,3H5.52L.719,9l4.8,6h8.48c1.654,0,3-1.346,3-3v-6c0-1.654-1.346-3-3-3Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m18.48,21h-8.48c-1.654,0-3-1.346-3-3v-1h2v1c0,.551.449,1,1,1h7.52l3.141-3.926-2.074-2.074,1.414-1.414,3.34,3.34-4.859,6.074Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
