import type { SVGProps } from "react";

export const HospitalBedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 15H22V20H2V15Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 9H7C9.20914 9 11 10.7909 11 13H5V9Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 5V22H1V5H3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M23 11L23 22L21 22L21 11L23 11Z" fill="currentColor" />
      <path d="M21 5L21 7L11 7L11 5L21 5Z" fill="currentColor" data-color="color-2" />
      <path d="M17 11L15 11L15 1L17 1L17 11Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
