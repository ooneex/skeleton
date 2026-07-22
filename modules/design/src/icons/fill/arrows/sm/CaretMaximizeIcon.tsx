import type { SVGProps } from "react";

export const CaretMaximizeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M1.99998 10L9.99997 1.99997L1.99995 2.00007L1.99998 10Z" fill="currentColor" />
      <path d="M22 14L14 22L22 21.9999L22 14Z" fill="currentColor" />
      <path d="M22 10L14 1.99997L22 2.00007L22 10Z" fill="currentColor" data-color="color-2" />
      <path d="M1.99998 14L9.99997 22L1.99995 21.9999L1.99998 14Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
