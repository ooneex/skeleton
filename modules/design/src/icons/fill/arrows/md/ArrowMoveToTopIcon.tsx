import type { SVGProps } from "react";

export const ArrowMoveToTopIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="2" y="28" width="28" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="20" y="19" width="10" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="19" width="10" height="2" strokeWidth="0" fill="currentColor" />
      <polygon
        points="23.414 9 16 1.586 8.586 9 10 10.414 15 5.414 15 25 17 25 17 5.414 22 10.414 23.414 9"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
