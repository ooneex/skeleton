import type { SVGProps } from "react";

export const RoadSignLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M27 38H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M27 32H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 11L21 3L27 3L27 11" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M27 25L27 45L21 45L21 25" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M41 25L11.3529 25L5 18L11.3529 11L41 11L41 25Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
