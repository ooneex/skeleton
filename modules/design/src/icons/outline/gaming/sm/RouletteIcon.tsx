import type { SVGProps } from "react";

export const RouletteIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M13.5 10.4981L10.4981 13.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M13.5118 13.5L10.5 10.4882"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M2 12H6" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M18 12H22" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M11.995 22.005L11.995 18.005" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M11.995 6.005L11.995 2.005" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M4.93247 4.93042L7.7609 7.75885" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M16.2462 16.2441L19.0746 19.0725" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M4.9254 19.0725L7.75383 16.2441" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M16.2391 7.75885L19.0675 4.93042" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
    </svg>
  );
};
