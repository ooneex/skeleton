import type { SVGProps } from "react";

export const StopSignIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M19.5 15V9H21C22.1046 9 23 9.89543 23 11V11C23 12.1046 22.1046 13 21 13H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M8.5 15V9M8.5 9H10M8.5 9H7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M4 9H2.5C1.67157 9 1 9.67157 1 10.5V10.5C1 11.3284 1.67157 12 2.5 12H3.5C4.32843 12 5 12.6716 5 13.5V13.5C5 14.3284 4.32843 15 3.5 15H2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16.75 12C16.75 13.6569 15.7426 15 14.5 15C13.2574 15 12.25 13.6569 12.25 12C12.25 10.3431 13.2574 9 14.5 9C15.7426 9 16.75 10.3431 16.75 12Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M5 19L8 22H16L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M5 5L8 2H16L19 4.99092" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
