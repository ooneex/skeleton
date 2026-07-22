import type { SVGProps } from "react";

export const ArrowTriangleLineUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 30L15 13L17 13L17 30L15 30Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M7 14.5L16 2L25 14.5L7 14.5Z" fill="currentColor" />
    </svg>
  );
};
