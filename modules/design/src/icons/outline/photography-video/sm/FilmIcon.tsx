import type { SVGProps } from "react";

export const FilmIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M3 12L21 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M3 16.5L8 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M16 3L16 21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M8 3L8 21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M16 7.5L21 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 7.5L8 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M16 16.5L21 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M5 21L19 21C20.1046 21 21 20.1046 21 19L21 5C21 3.89543 20.1046 3 19 3L5 3C3.89543 3 3 3.89543 3 5L3 19C3 20.1046 3.89543 21 5 21Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
