import type { SVGProps } from "react";

export const ArrowMoveToBottomIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="2" y="3" width="20" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="15" y="10" width="7" height="2" strokeWidth="0" fill="currentColor" />
      <rect x="2" y="10" width="7" height="2" strokeWidth="0" fill="currentColor" />
      <polygon
        points="17 15.586 13 19.586 13 7 11 7 11 19.586 7 15.586 5.586 17 12 23.414 18.414 17 17 15.586"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
