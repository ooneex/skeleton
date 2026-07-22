import type { SVGProps } from "react";

export const StackXIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 1L28 31L30 31L30 1L28 1Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 1L2 31L4 31L4 1L2 1Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M10 28L10 4L22 4L22 28L10 28Z" fill="currentColor" />
    </svg>
  );
};
