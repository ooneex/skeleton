import type { SVGProps } from "react";

export const MugIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M29 15V9H25V7H31V15C31 17.2091 29.2091 19 27 19H25V17H27C28.1046 17 29 16.1046 29 15Z"
        fill="currentColor"
      />
      <path
        d="M25 13V26C25 27.6569 23.6569 29 22 29H8C6.34315 29 5 27.6569 5 26V13H25Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M24 9H6V26C6 27.1046 6.89543 28 8 28H22C23.1046 28 24 27.1046 24 26V9ZM26 26C26 28.2091 24.2091 30 22 30H8C5.79086 30 4 28.2091 4 26V7H26V26Z"
        fill="currentColor"
      />
      <path d="M14 0H16V4H14V0Z" fill="currentColor" data-color="color-2" />
      <path d="M19 2H21V5H19V2Z" fill="currentColor" data-color="color-2" />
      <path d="M9 2H11V5H9V2Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
