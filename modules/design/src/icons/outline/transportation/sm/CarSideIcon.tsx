import type { SVGProps } from "react";

export const CarSideIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6436 13H18C18 14.1046 18.8954 15 20 15H22.01L21.6436 13Z"
        fill="currentColor"
        data-cap="butt"
        data-stroke="none"
      />
      <path d="M3 19H11" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M3 4H7.03875C7.64632 4 8.22094 4.27618 8.60049 4.75061L12 9L18.5852 10.3864C20.315 10.7505 21.6006 12.2068 21.7474 13.9684L22 17L22.6382 18.2764C22.8044 18.6088 22.5627 19 22.191 19H17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M14 22C12.3431 22 11 20.6569 11 19C11 17.3431 12.3431 16 14 16C15.6569 16 17 17.3431 17 19C17 20.6569 15.6569 22 14 22Z"
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
