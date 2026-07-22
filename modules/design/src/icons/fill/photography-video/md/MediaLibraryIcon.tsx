import type { SVGProps } from "react";

export const MediaLibraryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 29L8 29C4.13401 29 0.999999 25.866 0.999999 22L1 9L3 9L3 22C3 24.7614 5.23858 27 8 27L25 27L25 29Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 7C31 4.79086 29.2091 3 27 3H9C6.79086 3 5 4.79086 5 7V21C5 23.2091 6.79086 25 9 25H27C29.2091 25 31 23.2091 31 21V7ZM24.625 14L14 8.33333V19.6667L24.625 14Z"
        fill="currentColor"
      />
    </svg>
  );
};
