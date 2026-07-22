import type { SVGProps } from "react";

export const BarberPoleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 1V3V2.33333" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M11 15L17 8.99998"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M15 23L21 17" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M11 21L21 11" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M11 9V23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M21 9V23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M22.5 9C22.5 5.68629 19.5899 3 16 3C12.4101 3 9.5 5.68629 9.5 9"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M8 9H24" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M16 31V29V29.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M22.5 23C22.5 26.3137 19.5899 29 16 29C12.4101 29 9.5 26.3137 9.5 23"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M8 23H24" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
