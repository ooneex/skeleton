import type { SVGProps } from "react";

export const DeskIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 11L4 21L2 21L2 11L4 11Z" fill="currentColor" />
      <path d="M22 21L20 21L20 11L22 11L22 21Z" fill="currentColor" />
      <path d="M19 10V9H22V13L13 13V9H16V10L19 10Z" fill="currentColor" />
      <path d="M8 10V9H11V13L2 13V9H5V10L8 10Z" fill="currentColor" />
      <path
        d="M19 3C20.6569 3 22 4.34315 22 6L22 7L2 7L2 6C2 4.34314 3.34315 3 5 3L19 3Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
