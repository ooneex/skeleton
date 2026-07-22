import type { SVGProps } from "react";

export const Windmill3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 11.3333L25.3333 2L30 6.66667L23.7 11.1"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 20.6667L6.66667 30L2.00001 25.3333L8.30001 20.9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M20.6667 16L30 25.3334L25.3333 30L20.9 23.7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M11.3333 16L2 6.66664L6.66667 1.99998L11.1 8.29999"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <rect
        x="16"
        y="11.3333"
        width="6.59966"
        height="6.59966"
        transform="rotate(45 16 11.3333)"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        data-cap="butt"
      />
    </svg>
  );
};
