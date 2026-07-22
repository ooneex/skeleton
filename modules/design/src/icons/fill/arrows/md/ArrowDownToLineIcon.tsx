import type { SVGProps } from "react";

export const ArrowDownToLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M15 2L15 23H17L17 2L15 2Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.00003 12.5858L16 21.5858L25 12.5858L26.4142 14L16 24.4142L5.58582 14L7.00003 12.5858Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 29L30 27L2 27L2 29L30 29Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
