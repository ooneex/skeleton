import type { SVGProps } from "react";

export const BowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M21.0625 23.5L23.5 27L20 29L16 23.1538L12 29L8.5 27L10.9375 23.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <circle cx="16" cy="13.6667" r="4" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M19 11L26.2 5.6C28.1777 4.11672 31 5.52786 31 8V20.0326C31 22.4987 28.1898 23.9115 26.2105 22.4404L18.5685 16.7608"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M13 11L5.79999 5.6C3.82228 4.11672 0.99999 5.52786 0.99999 8V19.9999C0.99999 22.472 3.82233 23.8832 5.80003 22.3998L13.3721 16.7206"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
