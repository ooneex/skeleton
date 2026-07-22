import type { SVGProps } from "react";

export const Pen4Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M4.5 14.1602L9.8398 19.5" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M13.2345 5.53918L18.4783 10.783"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M9.00006 20.2337L20.9394 8.29438C21.5252 7.70859 21.5252 6.75883 20.9394 6.17305L17.8269 3.06065C17.2411 2.47487 16.2914 2.47488 15.7056 3.06066L3.76624 15L3.00328 21L9.00006 20.2337Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
