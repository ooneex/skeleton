import type { SVGProps } from "react";

export const GridLayoutIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11 22L2 22V15H11V22Z" fill="currentColor" data-color="color-2" />
      <path d="M22 2H13V9L22 9V2Z" fill="currentColor" data-color="color-2" />
      <path d="M11 13H2V2H11V13Z" fill="currentColor" />
      <path d="M22 11H13V22H22V11Z" fill="currentColor" />
    </svg>
  );
};
