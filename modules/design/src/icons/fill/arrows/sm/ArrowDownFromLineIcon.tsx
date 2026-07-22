import type { SVGProps } from "react";

export const ArrowDownFromLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 4L22 4L22 2L2 2L2 4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M11 6L11 21L13 21L13 6L11 6Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0001 13.5858L12.0001 19.5858L6.00009 13.5858L4.58588 15L12.0001 22.4142L19.4143 15L18.0001 13.5858Z"
        fill="currentColor"
      />
    </svg>
  );
};
