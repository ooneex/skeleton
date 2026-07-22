import type { SVGProps } from "react";

export const HandMixerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M22 16V31" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M29 14.5V9C29 5.68629 26.3137 3 23 3H12C6.47715 3 2 7.47715 2 13V14.5C2 15.3284 2.67157 16 3.5 16H27.5C28.3284 16 29 15.3284 29 14.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M22 21C24.2091 21 26 25.1789 26 27.25C26 29.3211 24.2091 31 22 31C19.7909 31 18 29.3211 18 27.25C18 25.1789 19.7909 21 22 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 11L23 11C24.1046 11 25 10.1046 25 9C25 7.89543 24.1046 7 23 7L16 7C14.8954 7 14 7.89543 14 9C14 10.1046 14.8954 11 16 11Z"
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
