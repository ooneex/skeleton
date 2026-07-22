import type { SVGProps } from "react";

export const DragLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M10.0645 11C10.0236 11.3277 10 11.6612 10 12C10 12.3388 10.0236 12.6723 10.0645 13H1.5V11H10.0645Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M5.5 17.4141L0.0859373 12L5.5 6.58594L6.91406 8L2.91406 12L6.91406 16L5.5 17.4141Z"
        fill="currentColor"
        data-color="color-2"
      />
      <circle cx="18" cy="12" r="6" fill="currentColor" />
    </svg>
  );
};
