import type { SVGProps } from "react";

export const HouseUserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 17.5C17.933 17.5 19.5 15.933 19.5 14C19.5 12.067 17.933 10.5 16 10.5C14.067 10.5 12.5 12.067 12.5 14C12.5 15.933 14.067 17.5 16 17.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M8 29C8 24.5 11.5817 21 16 21C20.4183 21 24 24.5 24 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path
        d="M2 13L16 2L30 13"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M5 16V26C5 27.657 6.343 29 8 29H24C25.657 29 27 27.657 27 26V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
