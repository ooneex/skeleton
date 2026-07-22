import type { SVGProps } from "react";

export const GraphicsCardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M25 39V34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      <path
        d="M20 34V39H38V34"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M7 34L39 34C41.2091 34 43 32.2091 43 30L43 14C43 11.7909 41.2091 10 39 10L7 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M7 39L7 5L3 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M17 27C19.7614 27 22 24.7614 22 22C22 19.2386 19.7614 17 17 17C14.2386 17 12 19.2386 12 22C12 24.7614 14.2386 27 17 27Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M33 27C35.7614 27 38 24.7614 38 22C38 19.2386 35.7614 17 33 17C30.2386 17 28 19.2386 28 22C28 24.7614 30.2386 27 33 27Z"
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
