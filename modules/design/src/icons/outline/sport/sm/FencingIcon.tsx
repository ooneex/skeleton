import type { SVGProps } from "react";

export const FencingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11 15.5L6 16" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" data-cap="butt" fill="none" />
      <path
        d="M5 22L6 16L7 9H7.49998"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M11 9V9C11.2702 9 11.4836 9.22923 11.4644 9.49873L11 16L13.1247 17.6998C13.3619 17.8895 13.5 18.1768 13.5 18.4806V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M19 14H18V10H19L19.5 11.5V12.5L19 14Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M10 6C11.1046 6 12 5.10457 12 4C12 2.89543 11.1046 2 10 2C8.89543 2 8 2.89543 8 4C8 5.10457 8.89543 6 10 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 12H14.4863C14.1793 12 13.8893 11.859 13.6997 11.6175L12.2452 9.76493C11.866 9.28201 11.2861 9 10.6721 9H6.34957H3.32019C3.15755 9 3.03821 8.84715 3.07766 8.68937L4 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M19 12H23"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
