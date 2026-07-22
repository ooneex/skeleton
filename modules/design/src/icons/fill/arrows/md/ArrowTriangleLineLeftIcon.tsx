import type { SVGProps } from "react";

export const ArrowTriangleLineLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 17L13 17L13 15L30 15L30 17Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M14.5 25L2 16L14.5 7L14.5 25Z" fill="currentColor" />
    </svg>
  );
};
