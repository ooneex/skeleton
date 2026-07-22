import type { SVGProps } from "react";

export const ChatBubbleForwardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M3 19H26H25" stroke="currentColor" strokeWidth="2" data-color="color-2" fill="none" data-cap="butt" />
      <path
        d="M18 11L26 19L18 27"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M3 12V10C3 7.23858 5.23858 5 8 5H40C42.7614 5 45 7.23858 45 10V27.6C45 30.3614 42.7614 32.6 40 32.6H27L13.5 41V32.6H8C5.23858 32.6 3 30.3614 3 27.6V19"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
