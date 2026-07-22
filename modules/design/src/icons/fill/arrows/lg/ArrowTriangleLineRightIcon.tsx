import type { SVGProps } from "react";

export const ArrowTriangleLineRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 22.5H28.5V25.5H4V22.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M26.5 12L43 24L26.5 36V12Z" fill="currentColor" />
    </svg>
  );
};
