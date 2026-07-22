import type { SVGProps } from "react";

export const RowsOffsetLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="11" y="12.5" width="19" height="7" strokeWidth="0" fill="currentColor" />
      <rect x="11" y="22" width="19" height="7" strokeWidth="0" fill="currentColor" />
      <rect x="11" y="3" width="19" height="7" strokeWidth="0" fill="currentColor" />
      <polygon
        points="7 22.414 .586 16 7 9.586 8.414 11 3.414 16 8.414 21 7 22.414"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
