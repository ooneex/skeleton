import type { SVGProps } from "react";

export const FlipVerticalIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 15L31 15L31 17L1 17L1 15Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.6724 19.0001L6.00006 19.0001L6.00006 31.7485L27.6724 19.0001Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.6724 13.0001L6.00005 13.0001L6.00006 0.251708L27.6724 13.0001Z"
        fill="currentColor"
      />
    </svg>
  );
};
