import type { SVGProps } from "react";

export const CaretUpToLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.13147 21L12 6.19722L21.8685 21L2.13147 21Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 5L2 5L2 3L22 3L22 5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
