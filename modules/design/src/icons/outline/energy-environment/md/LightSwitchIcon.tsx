import type { SVGProps } from "react";

export const LightSwitchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="20.5 24 11.5 24 10.5 22 21.5 22 20.5 24"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
        data-cap="butt"
      />
      <rect
        x="3"
        y="3"
        width="26"
        height="26"
        rx="3"
        ry="3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="12"
        y1="16"
        x2="20"
        y2="16"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <polygon
        points="20 16 20 8 12 8 12 16 10.5 22 11.5 24 20.5 24 21.5 22 20 16"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <line
        x1="10.5"
        y1="22"
        x2="21.5"
        y2="22"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
    </svg>
  );
};
