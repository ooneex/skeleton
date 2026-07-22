import type { SVGProps } from "react";

export const CaretExpandYIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon points="12 1.8 6.036 10 17.964 10 12 1.8" strokeWidth="0" fill="currentColor" />
      <polygon points="6.036 14 12 22.2 17.964 14 6.036 14" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
