import type { SVGProps } from "react";

export const CaretRightFromLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 30L5 30L5 2L3 2L3 30Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M9 28L9 4L27 16L9 28Z" fill="currentColor" />
    </svg>
  );
};
