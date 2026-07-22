import type { SVGProps } from "react";

export const BarberPoleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 1V2V1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M12 23V22V22.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M8 13L14 7" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M10 17L16 11" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M8 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M16 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M17 17C17 19.7614 14.7614 22 12 22C9.23858 22 7 19.7614 7 17"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M6 7H18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M6 17H18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
