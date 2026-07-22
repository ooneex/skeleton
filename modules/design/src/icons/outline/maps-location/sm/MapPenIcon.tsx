import type { SVGProps } from "react";

export const MapPenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15.5 10V6V7" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M8.5 2.51807V18" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M22 8V3.5L15.5 6L8.5 2.5L2 5V20.5L8.5 18V16.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 22.0001L22.3624 15.6377C23.1908 14.8093 23.1908 13.4661 22.3624 12.6377C21.534 11.8093 20.1908 11.8093 19.3624 12.6377L13 19.0001V22.0001H16Z"
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
