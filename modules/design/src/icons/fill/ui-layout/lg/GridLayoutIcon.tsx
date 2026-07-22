import type { SVGProps } from "react";

export const GridLayoutIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 44L22 31L4 31L4 44L22 44Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 4L44 17L26 17L26 4L44 4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 27L22 4L4 4L4 27L22 27Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M44 21L44 44L26 44L26 21L44 21Z" fill="currentColor" />
    </svg>
  );
};
