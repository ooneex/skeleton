import type { SVGProps } from "react";

export const FenceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13 23V25H11V23H13Z" fill="currentColor" data-color="color-2" />
      <path d="M13 10V12H11V10H13Z" fill="currentColor" data-color="color-2" />
      <path d="M23 10V12H21V10H23Z" fill="currentColor" data-color="color-2" />
      <path d="M23 23V25H21V23H23Z" fill="currentColor" data-color="color-2" />
      <path d="M19 5.35938V29H13V5.35938L16 2.23047L19 5.35938Z" fill="currentColor" />
      <path d="M9 5.35938V29H3V5.35938L6 2.23047L9 5.35938Z" fill="currentColor" />
      <path d="M29 5.35938V29H23V5.35938L26 2.23047L29 5.35938Z" fill="currentColor" />
    </svg>
  );
};
