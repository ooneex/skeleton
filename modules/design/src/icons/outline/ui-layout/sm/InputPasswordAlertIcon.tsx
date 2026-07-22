import type { SVGProps } from "react";

export const InputPasswordAlertIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="12" cy="11" r="1.25" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <circle cx="7.25" cy="11" r="1.25" strokeWidth="0" fill="currentColor" data-cap="butt" />
      <path
        d="m22,12v-5c0-1.105-.895-2-2-2H4c-1.105,0-2,.895-2,2v8c0,1.105.895,2,2,2h10"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="18"
        y1="11"
        x2="18"
        y2="16.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <circle cx="18" cy="20.75" r="1.25" fill="currentColor" strokeWidth="0" data-color="color-2" data-cap="butt" />
    </svg>
  );
};
