import type { SVGProps } from "react";

export const AudioJackIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M21 3V11" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M26 7H30" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M10.6667 7H9C5.68629 7 3 9.68629 3 13V13C3 16.3137 5.68629 19 9 19H24C26.7614 19 29 21.2386 29 24V24C29 26.7614 26.7614 29 24 29H8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M26 11H15C12.7909 11 11 9.20914 11 7C11 4.79086 12.7909 3 15 3H26V11Z"
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
