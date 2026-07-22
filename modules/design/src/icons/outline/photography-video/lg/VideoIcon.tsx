import type { SVGProps } from "react";

export const VideoIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M29 11V5H10"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M31 11H8C5.23858 11 3 13.2386 3 16V36C3 38.7614 5.23858 41 8 41H31C33.7614 41 36 38.7614 36 36V33L45 38V14L36 19V16C36 13.2386 33.7614 11 31 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M27 24H8V36H27V24Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M14 31C14.5523 31 15 30.5523 15 30C15 29.4477 14.5523 29 14 29C13.4477 29 13 29.4477 13 30C13 30.5523 13.4477 31 14 31Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <path
        d="M21 31C21.5523 31 22 30.5523 22 30C22 29.4477 21.5523 29 21 29C20.4477 29 20 29.4477 20 30C20 30.5523 20.4477 31 21 31Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
      />
      <path
        d="M8 17H12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
