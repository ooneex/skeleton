import type { SVGProps } from "react";

export const ChevronExpandYIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="17 9.414 12 4.414 7 9.414 5.586 8 12 1.586 18.414 8 17 9.414"
        strokeWidth="0"
        fill="currentColor"
      />
      <polygon
        points="12 22.414 5.586 16 7 14.586 12 19.586 17 14.586 18.414 16 12 22.414"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
