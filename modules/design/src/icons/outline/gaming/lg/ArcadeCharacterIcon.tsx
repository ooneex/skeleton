import type { SVGProps } from "react";

export const ArcadeCharacterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M45 24C45 26.7614 42.7614 29 40 29C37.2386 29 35 26.7614 35 24C35 21.2386 37.2386 19 40 19C42.7614 19 45 21.2386 45 24Z"
        stroke="currentColor"
        strokeWidth="2"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M9.15076 38.8492C17.3518 47.0503 30.6482 47.0503 38.8492 38.8492L24 24L38.8492 9.15076C30.6482 0.949746 17.3518 0.949746 9.15076 9.15076C0.949747 17.3518 0.949748 30.6482 9.15076 38.8492Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M23.5 16C22.1193 16 21 14.8807 21 13.5C21 12.1193 22.1193 11 23.5 11C24.8807 11 26 12.1193 26 13.5C26 14.8807 24.8807 16 23.5 16Z"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
