import type { SVGProps } from "react";

export const GridSystemIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M22 6L22 22L2 22L2 6L22 6Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M46 6L46 22L26 22L26 6L46 6Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 26L46 42L2 42L2 26L46 26Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
