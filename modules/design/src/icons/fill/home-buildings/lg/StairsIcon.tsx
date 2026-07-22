import type { SVGProps } from "react";

export const StairsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M10 32H18V35H10V32Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M18 23H24V26H18V23Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M23 14H34V17H23V14Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 5H44V43H4V32H10V23H18V14H26V5ZM29 8V17H21V26H13V35H7V40H41V8H29Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M37 5H44V43H16V32H22V23H30V14H37V5Z" fill="currentColor" />
    </svg>
  );
};
