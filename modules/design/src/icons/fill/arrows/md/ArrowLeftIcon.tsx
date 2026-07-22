import type { SVGProps } from "react";

export const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 15L3 15L3 17L30 17L30 15Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4143 6.00003L4.41431 16L14.4143 26L13.0001 27.4142L1.58588 16L13.0001 4.58582L14.4143 6.00003Z"
        fill="currentColor"
      />
    </svg>
  );
};
