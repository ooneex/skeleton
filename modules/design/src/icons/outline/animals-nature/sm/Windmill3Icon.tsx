import type { SVGProps } from "react";

export const Windmill3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 8.66667L18.6667 2L22 5.33334L17.5 8.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12 15.3333L5.33333 22L2 18.6667L6.5 15.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M15.3333 12L22 18.6667L18.6667 22L15.5 17.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M8.66667 12L2.00001 5.33334L5.33334 2.00001L8.5 6.50002"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <rect
        x="12"
        y="8.66667"
        width="4.71404"
        height="4.71404"
        transform="rotate(45 12 8.66667)"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        data-cap="butt"
      />
    </svg>
  );
};
