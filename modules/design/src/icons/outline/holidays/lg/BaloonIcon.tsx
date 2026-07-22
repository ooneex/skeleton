import type { SVGProps } from "react";

export const BaloonIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 40V46"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M27 34.5L29.2674 37.6177C29.9885 38.6092 29.2803 40 28.0543 40L19.9457 40C18.7197 40 18.0115 38.6092 18.7326 37.6177L21 34.5"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M24 35C32.2843 35 39 27.8366 39 19C39 10.1634 32.2843 3 24 3C15.7157 3 9 10.1634 9 19C9 27.8366 15.7157 35 24 35Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M14 19C14 12.9249 18.4772 8 24 8"
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
