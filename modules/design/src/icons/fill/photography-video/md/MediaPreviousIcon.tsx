import type { SVGProps } from "react";

export const MediaPreviousIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2L5 2L5 30L3 30L3 2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 29.8685L8.19723 16L29 2.13149L29 29.8685Z"
        fill="currentColor"
      />
    </svg>
  );
};
