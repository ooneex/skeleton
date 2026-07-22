import type { SVGProps } from "react";

export const PaperPlane2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <line
        x1="20.5"
        y1="3.5"
        x2="9.5"
        y2="14.5"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <polygon
        points="20.5 3.5 14.5 21.5 9.5 14.5 2.5 9.5 20.5 3.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
