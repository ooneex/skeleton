import type { SVGProps } from "react";

export const RowsOffsetLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="9" y="1" width="14" height="6" strokeWidth="0" fill="currentColor" />
      <rect x="9" y="9" width="14" height="6" strokeWidth="0" fill="currentColor" />
      <rect x="9" y="17" width="14" height="6" strokeWidth="0" fill="currentColor" />
      <polygon
        points="5 16.414 .586 12 5 7.586 6.414 9 3.414 12 6.414 15 5 16.414"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
