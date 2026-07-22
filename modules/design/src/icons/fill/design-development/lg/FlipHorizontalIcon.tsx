import type { SVGProps } from "react";

export const FlipHorizontalIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.5 2L25.5 2L25.5 46L22.5 46L22.5 2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 8L19.5 38.0002L2.26855 38.0002L19.5 8Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.5 8L28.5 38.0001L45.7314 38.0001L28.5 8Z"
        fill="currentColor"
      />
    </svg>
  );
};
