import type { SVGProps } from "react";

export const DroneIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M7.00003 28L11 24H21L25 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M5.5 19H9L12 24H20L23 19H26.5C28.433 19 30 17.433 30 15.5C30 13.567 28.433 12 26.5 12H5.5C3.567 12 2 13.567 2 15.5C2 17.433 3.567 19 5.5 19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M7 5V12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M25 5V12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M2 6H12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M20 6H30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16 21C16.9665 21 17.75 20.2165 17.75 19.25C17.75 18.2835 16.9665 17.5 16 17.5C15.0335 17.5 14.25 18.2835 14.25 19.25C14.25 20.2165 15.0335 21 16 21Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
