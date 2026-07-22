import type { SVGProps } from "react";

export const DividerYIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.99976 25.5L45.9998 25.5L45.9998 22.5L1.99976 22.5L1.99976 25.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 3H42V19H6V3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 29H42V45H6V29Z" fill="currentColor" />
    </svg>
  );
};
