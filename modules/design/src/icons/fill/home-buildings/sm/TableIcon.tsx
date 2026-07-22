import type { SVGProps } from "react";

export const TableIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 11L4 21L2 21L2 11L4 11Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 11L22 21L20 21L20 11L22 11Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 11L18 18L16 18L16 11L18 11Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 11L8 18L6 18L6 11L8 11Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M23 9H1V13L23 13V9Z" fill="currentColor" />
      <path d="M22.5 7H1.5L4.5 3H19.5L22.5 7Z" fill="currentColor" />
    </svg>
  );
};
