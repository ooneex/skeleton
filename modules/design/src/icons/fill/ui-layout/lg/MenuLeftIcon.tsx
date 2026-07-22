import type { SVGProps } from "react";

export const MenuLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 25.5H2V22.5H46V25.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M46 12.5H2V9.5H46V12.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M26 38.5H2V35.5H26V38.5Z" fill="currentColor" />
    </svg>
  );
};
