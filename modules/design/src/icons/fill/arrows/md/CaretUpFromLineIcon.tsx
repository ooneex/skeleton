import type { SVGProps } from "react";

export const CaretUpFromLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 29L30 27L2 27L2 29L30 29Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M28 23L4 23L16 5L28 23Z" fill="currentColor" />
    </svg>
  );
};
