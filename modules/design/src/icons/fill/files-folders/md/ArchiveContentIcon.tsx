import type { SVGProps } from "react";

export const ArchiveContentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 26V19H30V26C30 28.2091 28.2091 30 26 30L6 30C3.79086 30 2 28.2091 2 26ZM14 22H13V24H14H18H19V22H18H14Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M10 7H16V9H10V7Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M10 12H22V14H10V12Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 5C5 2.79086 6.79086 1 9 1H23C25.2091 1 27 2.79086 27 5V17H25V5C25 3.89543 24.1046 3 23 3H9C7.89543 3 7 3.89543 7 5V17H5V5Z"
        fill="currentColor"
      />
    </svg>
  );
};
