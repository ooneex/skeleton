import type { SVGProps } from "react";

export const DogHouseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 28V21C12 18.7908 13.7909 17 16 17C18.2091 17 20 18.7908 20 21V28"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path d="M5 28V11.5" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" fill="none" data-cap="butt" />
      <path d="M27 11.5V28" stroke="currentColor" strokeWidth="2" strokeMiterlimit="10" fill="none" data-cap="butt" />
      <path
        d="M2 14L16 3.00003L30 14"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M3 28H29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M14 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
