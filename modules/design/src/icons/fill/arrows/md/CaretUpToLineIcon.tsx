import type { SVGProps } from "react";

export const CaretUpToLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 3L30 5L2 5L2 3L30 3Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.13147 29L16 8.19723L29.8685 29L2.13147 29Z"
        fill="currentColor"
      />
    </svg>
  );
};
