import type { SVGProps } from "react";

export const AlignRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 23L22 1L20 1L20 23L22 23Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M2 5H18V10H2V5Z" fill="currentColor" />
      <path d="M8 14H18V19H8V14Z" fill="currentColor" />
    </svg>
  );
};
