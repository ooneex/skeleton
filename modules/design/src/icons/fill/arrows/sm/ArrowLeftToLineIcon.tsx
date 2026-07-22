import type { SVGProps } from "react";

export const ArrowLeftToLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2L4 22L2 22L2 2L4 2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 13L7 13L7 11L22 11L22 13Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4143 6.00003L8.41431 12L14.4143 18L13.0001 19.4142L5.58588 12L13.0001 4.58582L14.4143 6.00003Z"
        fill="currentColor"
      />
    </svg>
  );
};
