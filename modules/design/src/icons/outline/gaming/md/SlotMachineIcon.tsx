import type { SVGProps } from "react";

export const SlotMachineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M29 12L29 21C29 22.6569 27.6569 24 26 24H25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M5 24V29H21V24"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M3 9.125C3 7.46815 4.34315 6.125 6 6.125H8.6L8.77346 5.73781C9.51971 4.07207 11.1747 3 13 3V3C14.8253 3 16.4803 4.07207 17.2265 5.73781L17.4 6.125H20C21.6569 6.125 23 7.46815 23 9.125V20H3V9.125Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M29 12C27.8954 12 27 11.1046 27 10C27 8.89543 27.8954 8 29 8C30.1046 8 31 8.89543 31 10C31 11.1046 30.1046 12 29 12Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M19 10H7V16H19V10Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M10 24H16" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
