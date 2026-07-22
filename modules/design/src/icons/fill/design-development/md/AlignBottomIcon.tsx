import type { SVGProps } from "react";

export const AlignBottomIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 30L1 30L1 28L31 28L31 30Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 26L6 2L14 2L14 26L6 26Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M18 26L18 12L26 12L26 26L18 26Z" fill="currentColor" />
    </svg>
  );
};
