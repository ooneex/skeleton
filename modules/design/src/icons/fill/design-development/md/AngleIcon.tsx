import type { SVGProps } from "react";

export const AngleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M30 30L2 30L2 2L4 2L4 28L30 28L30 30Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 10H7C15.2843 10 22 16.7157 22 25V26H6V10Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
