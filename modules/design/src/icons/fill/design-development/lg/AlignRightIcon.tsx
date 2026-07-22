import type { SVGProps } from "react";

export const AlignRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 46L44 2L41 2L41 46L44 46Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 9L4 21L38 21L38 9L4 9Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M19 27L19 39L38 39L38 27L19 27Z" fill="currentColor" />
    </svg>
  );
};
