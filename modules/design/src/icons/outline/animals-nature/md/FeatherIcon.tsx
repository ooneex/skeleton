import type { SVGProps } from "react";

export const FeatherIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m20,18l6.8212-2.0464c1.3265-3.4375,2.0916-7.7566,2.1788-12.9536C10.375,3.3125,3,12.3125,7.2247,24.7754c6.8912,2.3359,12.7198,1.1184,16.6102-3.5796l-3.8349-3.1958Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="17"
        y1="15"
        x2="3"
        y2="29"
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
