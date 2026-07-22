import type { SVGProps } from "react";

export const PodiumTrophyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M31 34H43V43H31"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M17 31H5V43H17" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M19 5H16L16 5.75L19 7.25" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M29 5H32L32 5.75L29 7.25" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M24 13.0426V18.0426" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M19 3V8C19 10.7614 21.2386 13 24 13C26.7614 13 29 10.7614 29 8V3H19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M31 23H17V43H31V23Z" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M20 18H28" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
