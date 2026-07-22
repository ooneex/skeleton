import type { SVGProps } from "react";

export const CaretDownToLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 29L30 27L2 27L2 29L30 29Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M28 4.00001L4 4L16 22L28 4.00001Z" fill="currentColor" />
    </svg>
  );
};
