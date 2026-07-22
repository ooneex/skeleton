import type { SVGProps } from "react";

export const CaretRightToLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 21.8685L17.8028 12L3 2.1315L3 21.8685Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 2L19 22L21 22L21 2L19 2Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
