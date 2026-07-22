import type { SVGProps } from "react";

export const FormIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M30 7H2V25L30 25V7Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 5L2 5L2 3L30 3L30 5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 29L16 29L16 27L30 27L30 29Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
