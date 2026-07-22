import type { SVGProps } from "react";

export const ArrowRightToLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39 4L39 44L42 44L42 4L39 4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 25.5L34 25.5L34 22.5L4 22.5L4 25.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.8787 38L31.8787 24L17.8787 10L20 7.8787L36.1213 24L20 40.1213L17.8787 38Z"
        fill="currentColor"
      />
    </svg>
  );
};
