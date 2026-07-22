import type { SVGProps } from "react";

export const ArrowsExpandYIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 2L13 22L11 22L11 2L13 2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.08588 7.49997L12.0001 0.585759L18.9143 7.49997L17.5001 8.91418L12.0001 3.41418L6.5001 8.91418L5.08588 7.49997Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5001 15.0858L12.0001 20.5858L6.5001 15.0858L5.08588 16.5L12.0001 23.4142L18.9143 16.5L17.5001 15.0858Z"
        fill="currentColor"
      />
    </svg>
  );
};
