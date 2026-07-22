import type { SVGProps } from "react";

export const ArchiveIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 20H10V23H22V20H29V24C29 26.7614 26.7614 29 24 29H23H9H8C5.23858 29 3 26.7614 3 24V20Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 30C3.79086 30 2 28.2091 2 26L2 6C2 3.79086 3.79086 2 6 2L26 2C28.2091 2 30 3.79086 30 6L30 26C30 28.2091 28.2091 30 26 30L6 30ZM4 26C4 27.1046 4.89543 28 6 28L26 28C27.1046 28 28 27.1046 28 26L28 6C28 4.89543 27.1046 4 26 4L6 4C4.89543 4 4 4.89543 4 6L4 26Z"
        fill="currentColor"
      />
    </svg>
  );
};
