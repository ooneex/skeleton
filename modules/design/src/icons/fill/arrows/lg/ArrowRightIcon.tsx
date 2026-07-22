import type { SVGProps } from "react";

export const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 22.5L42 22.5L42 25.5L4 25.5L4 22.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.8787 9.99998L39.8787 24L25.8787 38L28 40.1213L44.1213 24L28 7.87866L25.8787 9.99998Z"
        fill="currentColor"
      />
    </svg>
  );
};
