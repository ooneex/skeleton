import type { SVGProps } from "react";

export const CaretLeftToLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 30L5 30L5 2L3 2L3 30Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 2.13147L8.19723 16L29 29.8685L29 2.13147Z"
        fill="currentColor"
      />
    </svg>
  );
};
