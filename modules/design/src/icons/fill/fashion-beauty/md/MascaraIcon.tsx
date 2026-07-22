import type { SVGProps } from "react";

export const MascaraIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13 3V5H5V3H13Z" fill="currentColor" data-color="color-2" />
      <path d="M13 7V9H5V7H13Z" fill="currentColor" data-color="color-2" />
      <path d="M13 11V13H5V11H13Z" fill="currentColor" data-color="color-2" />
      <path d="M7.99998 1H9.99998V21H7.99998V1Z" fill="currentColor" data-color="color-2" />
      <path d="M15 27C15 28.6569 13.6569 30 12 30H6C4.34315 30 3 28.6568 3 27V19H15V27Z" fill="currentColor" />
      <path d="M29 23H17V12H29V23Z" fill="currentColor" />
      <path d="M29 27C29 28.6569 27.6569 30 26 30H20C18.3432 30 17 28.6568 17 27V25H29V27Z" fill="currentColor" />
    </svg>
  );
};
