import type { SVGProps } from "react";

export const BullhornIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m14.333,23l2.009,6.026c.324.971-.399,1.974-1.423,1.974h-1.838c-.646,0-1.219-.413-1.423-1.026l-3.658-10.974"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <line
        x1="9"
        y1="19"
        x2="9"
        y2="6"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-cap="butt"
      />
      <path
        d="m28,15.329c1.165-.412,2-1.523,2-2.829s-.835-2.417-2-2.829"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <path
        d="m25,23h-2s-1-4-8-4h-6.5c-3.59,0-6.5-2.91-6.5-6.5h0c0-3.59,2.91-6.5,6.5-6.5h6.5c7,0,8-4,8-4h2v21Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
