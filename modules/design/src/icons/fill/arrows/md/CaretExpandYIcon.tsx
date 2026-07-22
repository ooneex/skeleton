import type { SVGProps } from "react";

export const CaretExpandYIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon points="8 19 16 29.667 24 19 8 19" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <polygon points="16 2.333 8 13 24 13 16 2.333" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
