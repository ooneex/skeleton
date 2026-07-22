import type { SVGProps } from "react";

export const CampgroundIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11 11L19 19V29" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M25 6V15" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path
        d="M8 29V24L11 21L14 24V29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M11 11H21L29 19V29H3V19L11 11Z" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M25 3V3C25 5.20914 23.2091 7 21 7V7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M25 5V7C25 9.20914 26.7909 11 29 11V11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M25 3V3C25 5.20914 26.7909 7 29 7V7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M11 7C11 4.79086 9.20914 3 7 3C4.79086 3 3 4.79086 3 7C3 8.72852 4.09639 10.201 5.63167 10.7598"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
