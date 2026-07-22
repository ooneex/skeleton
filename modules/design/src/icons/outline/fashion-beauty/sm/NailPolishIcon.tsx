import type { SVGProps } from "react";

export const NailPolishIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9 9V3C9 2.44772 9.44772 2 10 2H14C14.5523 2 15 2.44772 15 3V9"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 22H8C6.89543 22 6 21.1046 6 20V14C6 13.4477 6.44772 13 7 13H17C17.5523 13 18 13.4477 18 14V20C18 21.1046 17.1046 22 16 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M10 18H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
