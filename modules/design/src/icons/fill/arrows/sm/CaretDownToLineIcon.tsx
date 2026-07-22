import type { SVGProps } from "react";

export const CaretDownToLineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.8687 3L12.0001 17.8028L2.13162 3L21.8687 3Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 19L22 19L22 21L2 21L2 19Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
