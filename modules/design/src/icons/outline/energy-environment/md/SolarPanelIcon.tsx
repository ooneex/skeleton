import type { SVGProps } from "react";

export const SolarPanelIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 22V29" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M9 29H23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M16 4V22" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M4 9H28" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M2.5 15H29.5" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M30.1887 18.3492L27.522 6.34921C27.217 4.9766 25.9996 4 24.5935 4L7.40652 4C6.00042 4 4.78298 4.9766 4.47795 6.34921L1.81129 18.3492C1.39494 20.2228 2.8206 22 4.73985 22L27.2602 22C29.1794 22 30.6051 20.2228 30.1887 18.3492Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
