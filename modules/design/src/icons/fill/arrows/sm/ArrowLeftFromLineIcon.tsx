import type { SVGProps } from "react";

export const ArrowLeftFromLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 2L20 22L22 22L22 2L20 2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M18 11L3 11L3 13L18 13L18 11Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4143 18L4.41431 12L10.4143 5.99997L9.00009 4.58576L1.58588 12L9.00009 19.4142L10.4143 18Z"
        fill="currentColor"
      />
    </svg>
  );
};
