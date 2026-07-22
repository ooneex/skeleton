import type { SVGProps } from "react";

export const SolarPanelIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M27 33V43" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 33V43" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M24 7V33" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M6.5 15H41.5" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M4.5 23H43.5" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M44.8694 28.1006L40.5366 9.32542C40.2225 7.96423 39.0104 7 37.6135 7L10.3865 7C8.98957 7 7.77748 7.96422 7.46336 9.32542L3.13064 28.1006C2.55222 30.607 4.45587 33 7.0282 33L40.9718 33C43.5441 33 45.4478 30.607 44.8694 28.1006Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M15 43H33" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
