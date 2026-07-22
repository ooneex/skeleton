import type { SVGProps } from "react";

export const CaretExpandYIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M24 4.33331L35 19H13L24 4.33331Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 43.6667L35 29H13L24 43.6667Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
