import type { SVGProps } from "react";

export const ArrowUpToLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 9L4 9.00001L4 6.00001L44 6L44 9Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M22.5 44V14H25.5V44H22.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99998 30.1213L24 16.1213L38 30.1213L40.1213 28L24 11.8787L7.87866 28L9.99998 30.1213Z"
        fill="currentColor"
      />
    </svg>
  );
};
