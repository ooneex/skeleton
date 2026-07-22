import type { SVGProps } from "react";

export const RoadSignLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M10 6L10 3L14 3L14 6" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M14 13L14 21L10 21L10 13" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M20 13L6 13L3 9.5L6 6L20 6L20 13Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
