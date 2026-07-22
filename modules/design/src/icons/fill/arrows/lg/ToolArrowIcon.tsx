import type { SVGProps } from "react";

export const ToolArrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.9393 12.9393L35.0606 15.0607L5.99998 44.1213L3.87866 42L32.9393 12.9393Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M38.2498 24L24 9.74981L43 5L38.2498 24Z" fill="currentColor" />
    </svg>
  );
};
