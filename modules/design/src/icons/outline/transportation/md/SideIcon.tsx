import type { SVGProps } from "react";

export const SideIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 14V10V10.6666"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M16 5.00004V2" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M7.5 14.5L9.00001 5H23L24.5 14.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M5.77778 22L4.50833 18.0452C4.21373 17.1274 4.61571 16.13 5.46444 15.673L16 10L26.5356 15.673C27.3843 16.13 27.7863 17.1274 27.4917 18.0452L26.2222 22"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M29.9646 26C29.7219 27.6961 28.2632 29 26.5 29C24.567 29 23 27.433 23 25.5C23 27.433 21.433 29 19.5 29C17.567 29 16 27.433 16 25.5C16 27.433 14.433 29 12.5 29C10.567 29 9 27.433 9 25.5C9 27.433 7.433 29 5.5 29C3.73677 29 2.27806 27.6961 2.03545 26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
