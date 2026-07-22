import type { SVGProps } from "react";

export const ArrowMoveToBottomIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="2" y="2" width="28" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="11" width="10" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="20" y="11" width="10" height="2" strokeWidth="0" fill="currentColor" />
      <polygon
        points="22 21.586 17 26.586 17 7 15 7 15 26.586 10 21.586 8.586 23 16 30.414 23.414 23 22 21.586"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
