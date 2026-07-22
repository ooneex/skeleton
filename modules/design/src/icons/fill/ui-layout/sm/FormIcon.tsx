import type { SVGProps } from "react";

export const FormIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M22 6H2V18L22 18V6Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 4L2 4L2 2L22 2L22 4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 22L12 22L12 20L22 20L22 22Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
