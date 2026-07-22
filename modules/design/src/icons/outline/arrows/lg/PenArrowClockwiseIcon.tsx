import type { SVGProps } from "react";

export const PenArrowClockwiseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 15.7987 8.93638 8.7504 16 5.66417L15.6589 5.81703"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M5 5L16 5L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M20.6139 32.5233L32.4315 20.7056C33.85 19.287 33.85 16.9871 32.4315 15.5685C31.0129 14.15 28.713 14.15 27.2944 15.5685L15.4768 27.3861L15 33L20.6139 32.5233Z"
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
