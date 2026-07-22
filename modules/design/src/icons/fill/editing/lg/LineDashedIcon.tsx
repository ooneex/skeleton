import type { SVGProps } from "react";

export const LineDashedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M30 25.5L18 25.5L18 22.5L30 22.5L30 25.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 25.5L2 25.5L2 22.5L14 22.5L14 25.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 25.5L34 25.5L34 22.5L46 22.5L46 25.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
