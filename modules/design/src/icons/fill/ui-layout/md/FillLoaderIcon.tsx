import type { SVGProps } from "react";

export const FillLoaderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 8C3.58172 8 0 11.5817 0 16C0 20.4183 3.58172 24 8 24H24C28.4183 24 32 20.4183 32 16C32 11.5817 28.4183 8 24 8H8ZM6 19H8V13H6V19ZM11 19H13V13H11V19Z"
        fill="currentColor"
      />
    </svg>
  );
};
