import type { SVGProps } from "react";

export const AlignBottomIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 22L1 22L1 20L23 20L23 22Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M5 2L5 18L10 18L10 2L5 2Z" fill="currentColor" />
      <path d="M14 8L14 18L19 18L19 8L14 8Z" fill="currentColor" />
    </svg>
  );
};
