import type { SVGProps } from "react";

export const StackXIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 23L4 1L2 1L2 23L4 23Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 23L22 1L20 1L20 23L22 23Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M16 4L16 20L8 20L8 4L16 4Z" fill="currentColor" />
    </svg>
  );
};
