import type { SVGProps } from "react";

export const BooleanUnionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 2L10 22L30 22L30 2L10 2ZM12 4L28 4L28 20L12 20L12 4Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 10L2 30L22 30L22 10L2 10ZM4 12L20 12L20 28L4 28L4 12Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
