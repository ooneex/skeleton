import type { SVGProps } from "react";

export const MakeupBrushIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 7L18.5 3.5L18.2593 3.83702"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M11 10L2.63051 18.3823C1.80253 19.2115 1.80304 20.5548 2.63165 21.3834V21.3834V21.3834C3.45989 22.2117 4.8029 22.2112 5.63051 21.3823L14 13"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M22 10C22 7.87827 21.1572 5.84344 19.6569 4.34315C18.1566 2.84285 16.1217 2 14 2L10.7692 9.76914L14.2353 13.2347L22 10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
