import type { SVGProps } from "react";

export const ScooterAccidentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15 33H29L33.4545 26H39" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M7 41C9.20914 41 11 39.2091 11 37C11 34.7909 9.20914 33 7 33C4.79086 33 3 34.7909 3 37C3 39.2091 4.79086 41 7 41Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M42 41C44.2091 41 46 39.2091 46 37C46 34.7909 44.2091 33 42 33C39.7909 33 38 34.7909 38 37C38 39.2091 39.7909 41 42 41Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M6 28H7C11.9706 28 16 32.0294 16 37V38H32L39 27L37.2827 10.6859C37.122 9.1591 35.8345 8 34.2992 8H33"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M14.5 3.5L11 10.5L5 8L7 14L4 15.4383L8.55172 20H22L26 15.4383L22 14L23.5 7L19 8.36364L14.5 3.5Z"
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
