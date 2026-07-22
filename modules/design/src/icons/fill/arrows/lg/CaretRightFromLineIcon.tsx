import type { SVGProps } from "react";

export const CaretRightFromLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4L6 44L9 44L9 4L6 4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M14 41L14 7L40 24L14 41Z" fill="currentColor" />
    </svg>
  );
};
