import type { SVGProps } from "react";

export const ServerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 30H17V2H26C28.2091 2 30 3.79086 30 6V26C30 28.2091 28.2091 30 26 30ZM21 7V9H26V7H21ZM21 12H26V14H21V12ZM21 17V19H26V17H21Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2C3.79086 2 2 3.79086 2 6V26C2 28.2091 3.79086 30 6 30H15V2H6ZM6 7V9H11V7H6ZM6 12H11V14H6V12ZM6 17V19H11V17H6Z"
        fill="currentColor"
      />
    </svg>
  );
};
