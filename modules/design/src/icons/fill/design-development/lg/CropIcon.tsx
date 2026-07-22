import type { SVGProps } from "react";

export const CropIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 1L15 15L12 15L12 1L15 1Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.00024 12L36.0002 12L36.0002 35.9999L33.0002 35.9999V15L1.00024 15L1.00024 12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.9998 18L14.9998 32.9999L47.0002 32.9999V35.9999L11.9998 35.9999L11.9998 18H14.9998Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M36 39V47H33V39H36Z" fill="currentColor" />
    </svg>
  );
};
