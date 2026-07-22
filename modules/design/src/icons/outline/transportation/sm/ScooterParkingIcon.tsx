import type { SVGProps } from "react";

export const ScooterParkingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M7 17H17.8325" stroke="currentColor" strokeWidth="2" data-cap="butt" fill="none" />
      <path
        d="M3 22C4.10457 22 5 21.1046 5 20C5 18.8954 4.10457 18 3 18C1.89543 18 1 18.8954 1 20C1 21.1046 1.89543 22 3 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M21 22C22.1046 22 23 21.1046 23 20C23 18.8954 22.1046 18 21 18C19.8954 18 19 18.8954 19 20C19 21.1046 19.8954 22 21 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M3 15V15C5.76142 15 8 17.2386 8 20V21H15.5L19 15L18.1977 7.77914C18.0851 6.76627 17.229 6 16.2099 6H16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M3 11V2H5.97437C7.6412 2 8.98844 3.35875 8.97426 5.02552V5.02552C8.96026 6.67236 7.62127 8 5.97437 8H3.37753"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
