import type { SVGProps } from "react";

export const GridSystemIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M15 4L15 15L2 15L2 4L15 4Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M30 4L30 15L17 15L17 4L30 4Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 17L30 28L2 28L2 17L30 17Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
