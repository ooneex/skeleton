import type { SVGProps } from "react";

export const AudioJackIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M32 5V17" stroke="currentColor" strokeWidth="2" data-color="color-2" data-cap="butt" fill="none" />
      <path d="M39 11H46" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M16 11H14C9.02944 11 5 15.0294 5 20V20C5 24.9706 9.02944 29 14 29H36C39.866 29 43 32.134 43 36V36C43 39.866 39.866 43 36 43H12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M39 17H22C18.6863 17 16 14.3137 16 11C16 7.68629 18.6863 5 22 5H39V17Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
