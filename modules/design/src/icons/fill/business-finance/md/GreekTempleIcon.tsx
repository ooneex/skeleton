import type { SVGProps } from "react";

export const GreekTempleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M27.5 11L27.5 25L25.5 25L25.5 11L27.5 11Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4.5 25L4.5 11L6.5 11L6.5 25L4.5 25Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 25L11.5 11L13.5 11L13.5 25L11.5 25Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 25L18.5 11L20.5 11L20.5 25L18.5 25Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 7.62121L16 1.5L30 7.62121V12H2V7.62121ZM16 9C17.1046 9 18 8.10457 18 7C18 5.89543 17.1046 5 16 5C14.8954 5 14 5.89543 14 7C14 8.10457 14.8954 9 16 9Z"
        fill="currentColor"
      />
      <path d="M30 29H2V27C2 25.3431 3.34315 24 5 24H27C28.6569 24 30 25.3431 30 27V29Z" fill="currentColor" />
    </svg>
  );
};
