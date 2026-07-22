import type { SVGProps } from "react";

export const ArrowsExpandDiagonal3Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.29297 28.2928L28.293 2.29285L29.7072 3.70706L3.70718 29.7071L2.29297 28.2928Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M28 16V4H16V2H30V16H28Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 16L4 28L16 28L16 30L2 30L2 16L4 16Z" fill="currentColor" />
    </svg>
  );
};
