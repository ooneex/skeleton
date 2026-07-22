import type { SVGProps } from "react";

export const SwapNodesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4.80738 20.2413C4.28638 18.9289 4 17.4979 4 16C4 9.64873 9.14873 4.5 15.5 4.5C18.9857 4.5 22.1091 6.05077 24.2181 8.5"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <circle cx="8" cy="24" r="5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <circle cx="26" cy="13" r="5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
    </svg>
  );
};
