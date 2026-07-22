import type { SVGProps } from "react";

export const FaceSoldierIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M4.16592 20C5.11808 25.6754 10.054 30 16 30C21.946 30 26.8819 25.6754 27.8341 20"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16 2C8.26801 2 2 8.54353 2 16.6154V20H4.16753C5.29254 20 6.32299 19.3706 6.83662 18.3697L7.5 17.0769H24.5L25.1634 18.3697C25.677 19.3706 26.7075 20 27.8325 20H30V16.6154C30 8.54353 23.732 2 16 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M13 23H19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M13 12L16 9L19 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
