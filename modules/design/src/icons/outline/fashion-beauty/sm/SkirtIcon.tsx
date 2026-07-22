import type { SVGProps } from "react";

export const SkirtIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9 13.5L7.5 20.5L7.60714 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M15 13.5L16.5 20.5L16.4387 20.2141"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M12 7V3" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M6 7V3H18V7" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M2 17.6672C4.65216 19.8011 8.24927 21 12 21C15.7507 21 19.3478 19.8011 22 17.6672L18.2749 7.00001L5.72577 7L2 17.6672Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
    </svg>
  );
};
