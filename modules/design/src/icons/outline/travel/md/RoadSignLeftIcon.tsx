import type { SVGProps } from "react";

export const RoadSignLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M14 7L14 3L18 3L18 7" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M18 16L18 29L14 29L14 16" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M27 16L7 16L3.11765 11.5L7 7L27 7L27 16Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
