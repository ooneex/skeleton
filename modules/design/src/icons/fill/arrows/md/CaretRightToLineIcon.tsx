import type { SVGProps } from "react";

export const CaretRightToLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 30L27 30L27 2L29 2L29 30Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M23.8028 16L3 2.13147L3.00001 29.8685L23.8028 16Z" fill="currentColor" />
    </svg>
  );
};
