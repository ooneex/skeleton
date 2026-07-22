import type { SVGProps } from "react";

export const PocketIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 6H18.5V8H22V16.5352L12 23.2021L2 16.5352V8H5.5V6H2V2H22V6ZM7.5 8H11V6H7.5V8ZM13 6V8H16.5V6H13Z"
        fill="currentColor"
      />
    </svg>
  );
};
