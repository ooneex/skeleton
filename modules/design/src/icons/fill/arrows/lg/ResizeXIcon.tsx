import type { SVGProps } from "react";

export const ResizeXIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M40 25.5H8V22.5H40V25.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 13.8787L42.1213 24L32 34.1213L29.8787 32L37.8787 24L29.8787 16L32 13.8787Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 13.8787L5.8787 24L16 34.1213L18.1213 32L10.1213 24L18.1213 16L16 13.8787Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 6V42H2V6H5Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M46 6V42H43V6H46Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
