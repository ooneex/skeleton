import type { SVGProps } from "react";

export const BatteryStatusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M19 8V3H29V8" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M17 45H31C33.7614 45 36 42.7614 36 40V13C36 10.2386 33.7614 8 31 8L17 8C14.2386 8 12 10.2386 12 13L12 40C12 42.7614 14.2386 45 17 45Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M17 39H31V34H17L17 39Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17 29L31 29V24L17 24L17 29Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M17 19L31 19V14L17 14L17 19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
