import type { SVGProps } from "react";

export const FlipHorizontalIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 1L13 23L11 23L11 1L13 1Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M8.99999 5.69727L0.13147 19H8.99999V5.69727Z" fill="currentColor" />
      <path d="M15 5.69727L23.8685 19H15V5.69727Z" fill="currentColor" />
    </svg>
  );
};
