import type { SVGProps } from "react";

export const PinsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 2.40721C16.9838 2.13781 17.9967 2 19 2C24.362 2 30 5.93653 30 12.8608C30 20.327 19 30 19 30C19 30 17.7031 28.8571 16 27.0549"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M2 12.8608C2 20.3063 13 30 13 30C13 30 24 20.327 24 12.8608C24 5.93653 18.362 2 13 2C7.638 2 2 5.93653 2 12.8608Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M13 16C15.2091 16 17 14.2091 17 12C17 9.79086 15.2091 8 13 8C10.7909 8 9 9.79086 9 12C9 14.2091 10.7909 16 13 16Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
