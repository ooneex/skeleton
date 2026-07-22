import type { SVGProps } from "react";

export const HospitalBedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 26H45V37H3V26Z" fill="currentColor" />
      <path d="M8 16H13C16.3137 16 19 18.6863 19 22V23H8V16Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 8V42H5V8H2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M46 20L46 42L43 42L43 20L46 20Z" fill="currentColor" />
      <path d="M29 8V2H35V8H41V14H35V20H29V14H23V8H29Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
