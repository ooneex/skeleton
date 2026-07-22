import type { SVGProps } from "react";

export const WardrobeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 31L15 31V20H4V27C4 29.2091 5.79086 31 8 31ZM11 24V22L8 22V24L11 24Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 31L17 31V1H24C26.2091 1 28 2.79086 28 5L28 27C28 29.2091 26.2091 31 24 31ZM19 18H21V14H19V18Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M15 18H4L4 5C4 2.79086 5.79086 1 8 1H15V18Z" fill="currentColor" />
    </svg>
  );
};
