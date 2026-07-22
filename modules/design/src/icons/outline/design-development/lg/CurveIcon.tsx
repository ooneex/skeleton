import type { SVGProps } from "react";

export const CurveIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M43 43L4.99999 43L4.99999 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M10 38C29.2857 38 20.7143 10 40 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M5 5H8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M5 24H8" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M43 43V40" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M24 43V40" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
