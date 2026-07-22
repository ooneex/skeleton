import type { SVGProps } from "react";

export const FilmPlayIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15 21V17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M15 7V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 7L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 17L21 17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M9 21V17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M9 7V3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M21 19L21 5C21 3.89543 20.1046 3 19 3L5 3C3.89543 3 3 3.89543 3 5L3 19C3 20.1046 3.89543 21 5 21L19 21C20.1046 21 21 20.1046 21 19Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M10.5 9L15.5 12L10.5 15V9Z"
        fill="currentColor"
        data-color="color-2"
        data-cap="butt"
        data-stroke="none"
      />
    </svg>
  );
};
