import type { SVGProps } from "react";

export const InputSearchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="12" cy="11" r="1.25" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="7.25" cy="11" r="1.25" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle
        cx="17.525"
        cy="16.525"
        r="3.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m22,10.5v-3.5c0-1.105-.895-2-2-2H4c-1.105,0-2,.895-2,2v8c0,1.105.895,2,2,2h6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="22.525"
        y1="21.525"
        x2="20"
        y2="19"
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
