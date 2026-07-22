import type { SVGProps } from "react";

export const MilitaryTankIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 21C12.8284 21 13.5 20.3284 13.5 19.5C13.5 18.6716 12.8284 18 12 18C11.1716 18 10.5 18.6716 10.5 19.5C10.5 20.3284 11.1716 21 12 21Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M17.5 21C18.3284 21 19 20.3284 19 19.5C19 18.6716 18.3284 18 17.5 18C16.6716 18 16 18.6716 16 19.5C16 20.3284 16.6716 21 17.5 21Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M6.5 21C7.32843 21 8 20.3284 8 19.5C8 18.6716 7.32843 18 6.5 18C5.67157 18 5 18.6716 5 19.5C5 20.3284 5.67157 21 6.5 21Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path
        d="M23 7H13.5H14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M5 11V7C5 5.89543 5.89543 5 7 5H13L14 11"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path d="M21 11H3L2.25 13L1.5 15H22.5L21 11Z" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M22 19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19"
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
