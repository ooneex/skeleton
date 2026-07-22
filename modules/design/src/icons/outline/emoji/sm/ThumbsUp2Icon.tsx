import type { SVGProps } from "react";

export const ThumbsUp2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m7,20h10.569c.856,0,1.617-.545,1.893-1.355l2.386-7c.442-1.298-.522-2.645-1.893-2.645h-6.455l.955-4.455c.309-1.444-.527-2.887-1.934-3.336h0s-5.521,8.792-5.521,8.792"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-cap="butt"
      />
      <rect
        x="2"
        y="10"
        width="5"
        height="12"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
    </svg>
  );
};
