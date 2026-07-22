import type { SVGProps } from "react";

export const AlignLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 31L2 1L4 1L4 31L2 31Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 6L30 6L30 14L6 14L6 6Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 18L20 18L20 26L6 26L6 18Z" fill="currentColor" />
    </svg>
  );
};
