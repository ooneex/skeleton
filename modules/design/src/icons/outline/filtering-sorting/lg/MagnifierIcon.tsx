import type { SVGProps } from "react";

export const MagnifierIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M18 31C25.1797 31 31 25.1797 31 18C31 10.8203 25.1797 5 18 5C10.8203 5 5 10.8203 5 18C5 25.1797 10.8203 31 18 31Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M27.192 27.1919L30.732 30.7319"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M34.2674 30.7322C33.2911 29.7559 31.7082 29.7559 30.7319 30.7322C29.7556 31.7085 29.7556 33.2915 30.7319 34.2678L38.7321 42.268C39.7084 43.2443 41.2913 43.2443 42.2676 42.268C43.2439 41.2917 43.2439 39.7088 42.2676 38.7324L34.2674 30.7322Z"
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
