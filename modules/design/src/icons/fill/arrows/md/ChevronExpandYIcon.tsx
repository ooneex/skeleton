import type { SVGProps } from "react";

export const ChevronExpandYIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="16 29.414 8.586 22 10 20.586 16 26.586 22 20.586 23.414 22 16 29.414"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <polygon
        points="22 11.414 16 5.414 10 11.414 8.586 10 16 2.586 23.414 10 22 11.414"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
