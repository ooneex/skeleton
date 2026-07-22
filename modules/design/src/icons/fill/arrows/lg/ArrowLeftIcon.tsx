import type { SVGProps } from "react";

export const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 22.5L5.99998 22.5L5.99998 25.5L44 25.5L44 22.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.1213 9.99998L8.12134 24L22.1213 38L20 40.1213L3.8787 24L20 7.87866L22.1213 9.99998Z"
        fill="currentColor"
      />
    </svg>
  );
};
