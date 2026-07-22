import type { SVGProps } from "react";

export const FilterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="3 1 3 6.384 12 16.384 12 31.869 20 26.535 20 16.384 29 6.384 29 1 3 1"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
