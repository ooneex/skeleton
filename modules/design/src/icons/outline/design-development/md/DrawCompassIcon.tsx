import type { SVGProps } from "react";

export const DrawCompassIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 19V25"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M16 4.00004V1" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M4 30L13.5 11L13.25 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M28 30L18.5 11L18.75 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M4 22H28" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M16 12C18.2091 12 20 10.2091 20 8C20 5.79086 18.2091 4 16 4C13.7909 4 12 5.79086 12 8C12 10.2091 13.7909 12 16 12Z"
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
