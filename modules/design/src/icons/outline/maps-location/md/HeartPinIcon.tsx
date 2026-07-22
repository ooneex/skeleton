import type { SVGProps } from "react";

export const HeartPinIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5.5 12.8608C5.5 20.3063 16.5 30 16.5 30C16.5 30 27.5 20.327 27.5 12.8608C27.5 5.93653 21.862 2 16.5 2C11.138 2 5.5 5.93653 5.5 12.8608Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M16.5 19C17.8308 18.4118 22.5 15.1518 22.5 12.1635C22.5 10.4165 21.0528 9 19.2696 9C18.0936 9 17.2152 9.72235 16.5 10.5329C15.786 9.72118 14.9064 9 13.7304 9C11.946 9 10.5 10.4165 10.5 12.1635C10.5 15.1518 15.1692 18.4118 16.5 19Z"
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
