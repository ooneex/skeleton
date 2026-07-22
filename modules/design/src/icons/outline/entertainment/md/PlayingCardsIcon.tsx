import type { SVGProps } from "react";

export const PlayingCardsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M22 2H7C5.34315 2 4 3.34315 4 5V27C4 28.6569 5.34315 30 7 30H22C23.6569 30 25 28.6569 25 27V5C25 3.34315 23.6569 2 22 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M29 5V27"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M20 15.0056C20 17.8439 15.7201 20.9409 14.5 21.5C13.2799 20.9409 9 17.8439 9 15.0056C9 13.3454 10.3264 12 11.9618 12C12.9929 12 13.7762 12.6285 14.4154 13.3585H14.5846C15.2238 12.6285 16.0071 12 17.0382 12C18.6736 12 20 13.3454 20 15.0056Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M8 6H9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M20 26H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
