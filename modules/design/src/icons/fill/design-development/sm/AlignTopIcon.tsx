import type { SVGProps } from "react";

export const AlignTopIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 2L23 2L23 4L1 4L1 2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M19 22L19 6L14 6L14 22L19 22Z" fill="currentColor" />
      <path d="M10 16L10 6L5 6L5 16L10 16Z" fill="currentColor" />
    </svg>
  );
};
