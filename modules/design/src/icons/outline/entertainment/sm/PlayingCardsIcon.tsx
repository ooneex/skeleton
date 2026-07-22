import type { SVGProps } from "react";

export const PlayingCardsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M17 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H17C18.1046 22 19 21.1046 19 20V4C19 2.89543 18.1046 2 17 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M23 4V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M15 11.2192C15 13.0118 12.2764 14.8387 11.5 15.1919C10.7236 14.8387 8 13.0118 8 11.2192C8 10.1707 8.84408 9.32094 9.88475 9.32094C10.5409 9.32094 11.0394 9.7179 11.4461 10.1789H11.5539C11.9606 9.7179 12.4591 9.32094 13.1152 9.32094C14.1559 9.32094 15 10.1707 15 11.2192Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M7.5 5.5L7.50707 5.49293" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M15.5 18.5071L15.5071 18.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
