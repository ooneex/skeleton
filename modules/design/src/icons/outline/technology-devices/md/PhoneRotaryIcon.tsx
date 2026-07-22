import type { SVGProps } from "react";

export const PhoneRotaryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m28.343,21.178l-7.343-9.178h-10l-7.343,9.178c-.426.532-.657,1.193-.657,1.874v2.948c0,1.657,1.343,3,3,3h20c1.657,0,3-1.343,3-3v-2.948c0-.681-.232-1.342-.657-1.874Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <circle
        cx="16"
        cy="21"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m6,12h-1.5c-.828,0-1.5-.672-1.5-1.5v-2.472c0-1.25.78-2.373,1.949-2.816,7.79-2.95,14.313-2.95,22.103,0,1.169.443,1.949,1.566,1.949,2.816v2.472c0,.828-.672,1.5-1.5,1.5h-1.5"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <line
        x1="11"
        y1="12"
        x2="11"
        y2="9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="21"
        y1="12"
        x2="21"
        y2="9"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
