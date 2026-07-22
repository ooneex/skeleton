import type { SVGProps } from "react";

export const EnergySupplementIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M16 2V8" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M21 2V8" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path d="M11 2V8" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M22.8056 8L26.8338 12.8116C27.5872 13.7114 28 14.8476 28 16.0212V27C28 28.6569 26.6569 30 25 30H7C5.34315 30 4 28.6569 4 27V16.0212C4 14.8476 4.41282 13.7114 5.16619 12.8116L9.19444 8"
        stroke="currentColor"
        strokeWidth="2"
        data-cap="butt"
        fill="none"
      />
      <path
        d="M6 8L26 8L26 2L6 2L6 8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M10.5 21L15.5 12H17L16.5 17H21.5L16.5 26H15L15.5 21H10.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
