import type { SVGProps } from "react";

export const MediaPreviousIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 22L5 2L3 2L3 22L5 22Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 21.8685L6.19722 12L21 2.1315L21 21.8685Z"
        fill="currentColor"
      />
    </svg>
  );
};
