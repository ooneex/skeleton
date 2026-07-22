import type { SVGProps } from "react";

export const ArrowTriangleLineUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 22L11 9L13 9L13 22L11 22Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 10.5L12 2L18 10.5L6 10.5Z" fill="currentColor" />
    </svg>
  );
};
