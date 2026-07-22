import type { SVGProps } from "react";

export const GradientIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M16 3L16 29L2 29L2 3L16 3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M26 3L26 29L18 29L18 3L26 3Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 3L30 29L28 29L28 3L30 3Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
