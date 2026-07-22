import type { SVGProps } from "react";

export const ChequeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M6 13H3V39H45V13H33.75"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M9 34H20" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M25 34H27" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M9 29H14" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M17.6139 20.5233L29.4315 8.70558C30.85 7.28702 30.85 4.98709 29.4315 3.56854C28.0129 2.14997 25.713 2.14997 24.2944 3.56853L12.4768 15.3861L12 21L17.6139 20.5233Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M39 23.5H36.25C35.0074 23.5 34 24.5074 34 25.75V25.75C34 26.9926 35.0074 28 36.25 28H37.75C38.9926 28 40 29.0074 40 30.25V30.25C40 31.4926 38.9926 32.5 37.75 32.5H35"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M37 23.5V22"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M37 34V32.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
