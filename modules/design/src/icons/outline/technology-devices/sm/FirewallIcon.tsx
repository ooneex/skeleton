import type { SVGProps } from "react";

export const FirewallIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M9 9L9 3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M15 9L15 3" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M10 21L10 15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M7 15L7 9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M14 18.0266C14 17.3857 14.5 14.561 14.5 14.561L15.625 15.1707L18 12C18 12 22 15.1707 22 18.0266C22 20.5598 19.9498 22 18 22C16.0502 22 14 20.5598 14 18.0266Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M3 15H10" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M3 9H21" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M10 21L5 21C3.89543 21 3 20.1046 3 19L3 5C3 3.89543 3.89543 3 5 3L19 3C20.1046 3 21 3.89543 21 5L21 9"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
