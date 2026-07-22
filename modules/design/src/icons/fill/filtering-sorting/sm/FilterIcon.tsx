import type { SVGProps } from "react";

export const FilterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="2 2 2 5.376 9 13.376 9 23.618 15 20.618 15 13.376 22 5.376 22 2 2 2"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
