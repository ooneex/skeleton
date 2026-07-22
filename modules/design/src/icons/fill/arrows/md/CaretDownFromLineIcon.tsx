import type { SVGProps } from "react";

export const CaretDownFromLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 3L30 5L2 5L2 3L30 3Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M28 9.00001L4 9L16 27L28 9.00001Z" fill="currentColor" />
    </svg>
  );
};
