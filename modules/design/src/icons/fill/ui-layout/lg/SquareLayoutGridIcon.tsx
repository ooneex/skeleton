import type { SVGProps } from "react";

export const SquareLayoutGridIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M25.5 4V22.5H44V10C44 6.68629 41.3137 4 38 4H25.5Z" fill="currentColor" data-color="color-2" />
      <path d="M22.5 4V22.5H4V10C4 6.68629 6.68629 4 10 4H22.5Z" fill="currentColor" />
      <path d="M4 25.5V38C4 41.3137 6.68629 44 10 44H22.5V25.5H4Z" fill="currentColor" data-color="color-2" />
      <path d="M25.5 44H38C41.3137 44 44 41.3137 44 38V25.5H25.5V44Z" fill="currentColor" />
    </svg>
  );
};
