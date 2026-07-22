import type { SVGProps } from "react";

export const FoodScaleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M24 11V18" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M25.25 31.5L25 32L26.5 29"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M28 37V36C28 33.7909 26.2091 32 24 32V32C21.7909 32 20 33.7909 20 36V37"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M7 43H41V35C41 25.6112 33.3888 18 24 18C14.6112 18 7 25.6112 7 35V43Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12 37H36V35C36 28.3726 30.6274 23 24 23C17.3726 23 12 28.3726 12 35V37Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M36 11H12C9.23858 11 7 8.76142 7 6V5H41V6C41 8.76142 38.7614 11 36 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
