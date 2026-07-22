import type { SVGProps } from "react";

export const ArrowsTransactionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 12C6.5 8.96243 8.96243 6.5 12 6.5C15.0376 6.5 17.5 8.96243 17.5 12C17.5 15.0376 15.0376 17.5 12 17.5C8.96243 17.5 6.5 15.0376 6.5 12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 23.9142L23.4142 19H12V21H18.5858L18.5 23.9142Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 0.085816L0.585786 5.00003L12 5.00003L12 3.00003L5.41421 3.00003L5.5 0.085816Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
