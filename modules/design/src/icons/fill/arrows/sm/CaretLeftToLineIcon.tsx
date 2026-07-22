import type { SVGProps } from "react";

export const CaretLeftToLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 21.8685L6.19722 12L21 2.1315L21 21.8685Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 2L5 22L3 22L3 2L5 2Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
