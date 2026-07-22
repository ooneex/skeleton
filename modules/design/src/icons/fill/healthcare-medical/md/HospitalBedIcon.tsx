import type { SVGProps } from "react";

export const HospitalBedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 12H12C14.2091 12 16 13.7909 16 16V17H6V12Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 7V19H30V29H28V25H4V29H2V7H4Z" fill="currentColor" />
      <path d="M20 5V1H24V5H28V9H24V13H20V9H16V5H20Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
