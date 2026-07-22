import type { SVGProps } from "react";

export const TempleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13 0V3H11V0H13Z" fill="currentColor" />
      <path
        d="M20 10H4C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5 13V22H8.5V13H10.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M5.5 13V22H3.5V13H5.5Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 13V22H13.5V13H15.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 13V22H18.5V13H20.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 20L2 20L2 22L22 22L22 20Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 9L2 9L2 11L22 11L22 9Z" fill="currentColor" />
    </svg>
  );
};
