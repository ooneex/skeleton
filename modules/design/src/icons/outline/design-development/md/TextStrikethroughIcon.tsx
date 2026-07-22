import type { SVGProps } from "react";

export const TextStrikethroughIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16.0413 16H14.9587C7.65258 16 5.92328 5.20622 13.0155 3.30736C17.1688 2.19536 20.877 4.20317 23 7.67682"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M8 24.3232C10.123 27.7968 13.8312 29.8046 17.9845 28.6926C22.2058 27.5624 23.302 23.281 21.9571 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M2 16L30 16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
