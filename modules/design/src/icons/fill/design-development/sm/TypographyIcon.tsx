import type { SVGProps } from "react";

export const TypographyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M8 21H16V23H8V21Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 1H21V6H19V3H5V6H3V1Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 1V23H11V1H13Z" fill="currentColor" />
    </svg>
  );
};
