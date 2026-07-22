import type { SVGProps } from "react";

export const BaggageScaleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M4 8V29H29V25H4.66667" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M6.5 5.5C6.5 6.88071 5.38071 8 4 8C2.61929 8 1.5 6.88071 1.5 5.5C1.5 4.11929 2.61929 3 4 3C5.38071 3 6.5 4.11929 6.5 5.5Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M16 21V4.5C16 3.67157 16.6716 3 17.5 3H21.5C22.3284 3 23 3.67157 23 4.5V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M10 9C10 7.89543 10.8954 7 12 7H27C28.1046 7 29 7.89543 29 9V19C29 20.1046 28.1046 21 27 21H12C10.8954 21 10 20.1046 10 19V9Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
