import type { SVGProps } from "react";

export const IndustryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M11 19L20 15L20 19L29 15V29H11"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        data-color="color-2"
        fill="none"
        data-cap="butt"
      />
      <path d="M3 29H11V10H5L3 29Z" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M5 6C5 3.23833 7.686 1 11 1C12.904 1 14.598 1.74167 15.697 2.89417C16.579 2.24167 17.728 1.83333 19 1.83333C21.761 1.83333 24 3.69917 24 6H20.2"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M25.01 24H25"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M16.01 24H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M29.01 6H28"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
