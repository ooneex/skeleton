import type { SVGProps } from "react";

export const ArrowLeftToLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2L5 2L5 30L3 30L3 2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M30 17L9 17L9 15L30 15L30 17Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.4143 24.9998L10.4143 15.9998L19.4143 6.99985L18.0001 5.58564L7.58588 15.9998L18.0001 26.4141L19.4143 24.9998Z"
        fill="currentColor"
      />
    </svg>
  );
};
