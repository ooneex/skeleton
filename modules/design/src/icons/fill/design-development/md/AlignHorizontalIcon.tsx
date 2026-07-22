import type { SVGProps } from "react";

export const AlignHorizontalIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 7L17 7L17 1L15 1L15 7Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 20L17 12L15 12L15 20L17 20Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 31L17 31L17 24L15 24L15 31Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M4 25L28 25L28 18L4 18L4 25Z" fill="currentColor" />
      <path d="M9 14L23 14L23 7L9 7L9 14Z" fill="currentColor" />
    </svg>
  );
};
