import type { SVGProps } from "react";

export const ArrowDownToLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 39L4 39L4 42L44 42L44 39Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M22.5 4V34H25.5V4H22.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.99998 17.8787L24 31.8787L38 17.8787L40.1213 20L24 36.1213L7.87866 20L9.99998 17.8787Z"
        fill="currentColor"
      />
    </svg>
  );
};
