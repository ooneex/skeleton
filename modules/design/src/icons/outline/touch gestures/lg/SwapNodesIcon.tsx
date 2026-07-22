import type { SVGProps } from "react";

export const SwapNodesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M6.28691 30.5C5.45764 28.4976 5 26.3022 5 24C5 14.6112 12.6112 7 22 7C27.0773 7 31.6347 9.22581 34.7497 12.7549"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <circle cx="11" cy="37" r="8" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <circle cx="38" cy="20" r="8" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
    </svg>
  );
};
