import type { SVGProps } from "react";

export const BorderWidthIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M2 11L22 11L22 2L2 2L2 11Z" fill="currentColor" />
      <path d="M2 18L22 18L22 13L2 13L2 18Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 22L2 22L2 20L22 20L22 22Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
