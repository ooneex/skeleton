import type { SVGProps } from "react";

export const RowsOffsetRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="1" y="1" width="14" height="6" strokeWidth="0" fill="currentColor" />
      <rect x="1" y="9" width="14" height="6" strokeWidth="0" fill="currentColor" />
      <rect x="1" y="17" width="14" height="6" strokeWidth="0" fill="currentColor" />
      <polygon
        points="19 16.414 17.586 15 20.586 12 17.586 9 19 7.586 23.414 12 19 16.414"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
