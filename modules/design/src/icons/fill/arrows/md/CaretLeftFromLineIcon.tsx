import type { SVGProps } from "react";

export const CaretLeftFromLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 30L27 30L27 2L29 2L29 30Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M23 28L23 4L5 16L23 28Z" fill="currentColor" />
    </svg>
  );
};
