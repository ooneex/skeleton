import type { SVGProps } from "react";

export const SelfieIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M8.5 13C11.5 15 15.5 14 18 11.6667C19.3333 13 21 14.5 23.5 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M22.8028 19.3044L23.4179 15.8598C24.2426 11.2413 20.6916 7 16 7C11.3084 7 7.75737 11.2413 8.58212 15.8599L9.19721 19.3044C9.78574 22.6001 12.6521 25 16 25C19.3479 25 22.2143 22.6001 22.8028 19.3044Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M3 10V6C3 4.34315 4.34315 3 6 3H10"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22 3H26C27.6569 3 29 4.34315 29 6V10"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M29 22V26C29 27.6569 27.6569 29 26 29H22"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M10 29H6C4.34315 29 3 27.6569 3 26V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M13.1707 20C13.5826 21.1652 14.6938 22 16 22C17.3062 22 18.4175 21.1652 18.8293 20H13.1707Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
