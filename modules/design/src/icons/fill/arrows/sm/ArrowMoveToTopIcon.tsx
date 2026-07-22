import type { SVGProps } from "react";

export const ArrowMoveToTopIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="2" y="19" width="20" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="12" width="7" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="15" y="12" width="7" height="2" strokeWidth="0" fill="currentColor" />
      <polygon
        points="18.414 7 12 .586 5.586 7 7 8.414 11 4.414 11 17 13 17 13 4.414 17 8.414 18.414 7"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
