import type { SVGProps } from "react";

export const ArrowRightFromLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2L4 22L2 22L2 2L4 2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 11L21 11L21 13L6 13L6 11Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5857 18L19.5857 12L13.5857 5.99997L14.9999 4.58576L22.4141 12L14.9999 19.4142L13.5857 18Z"
        fill="currentColor"
      />
    </svg>
  );
};
