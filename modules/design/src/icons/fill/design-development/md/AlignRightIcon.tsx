import type { SVGProps } from "react";

export const AlignRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 31L30 1L28 1L28 31L30 31Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M26 5H2V14H26V5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M26 18H12V27H26V18Z" fill="currentColor" />
    </svg>
  );
};
