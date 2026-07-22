import type { SVGProps } from "react";

export const ServiceBellIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M24 7V13" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M24 13C12.402 13 3 22.2677 3 33.7V36H45V33.7C45 22.2677 35.598 13 24 13Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24 20C18.2993 20 13.3944 23.2855 11.2107 28"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M3 41H45" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M18 7H30" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
