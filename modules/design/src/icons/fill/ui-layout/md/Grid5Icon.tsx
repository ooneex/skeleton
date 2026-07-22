import type { SVGProps } from "react";

export const Grid5Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2L15 2L15 15L2 15L2 2ZM4 4L4 13L13 13L13 4L4 4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 2L30 2V15L17 15L17 2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 17L15 17L15 30L2 30L2 17Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 17L30 17V30L17 30L17 17Z" fill="currentColor" />
    </svg>
  );
};
