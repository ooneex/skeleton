import type { SVGProps } from "react";

export const MilitaryVestIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M41 35V43H7V35"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M30 26H18V18H30V26Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        data-cap="butt"
        fill="none"
      />
      <path d="M18 32H30" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M18 37H30" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M41 29V23L40.879 22.9032C37.7952 20.4361 36 16.7011 36 12.7519V3.00002H31L30.4768 6.62233C30.0118 9.84167 27.2528 12.2308 24 12.2308V12.2308C20.7472 12.2308 17.9882 9.84167 17.5232 6.62233L17 3.00002L12 3V12.7519C12 16.7011 10.2048 20.4361 7.12103 22.9032L7 23V29"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M10 29H3V35H10C11.6569 35 13 33.6569 13 32C13 30.3431 11.6569 29 10 29Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M45 29H38C36.3431 29 35 30.3431 35 32C35 33.6569 36.3431 35 38 35H45V29Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
