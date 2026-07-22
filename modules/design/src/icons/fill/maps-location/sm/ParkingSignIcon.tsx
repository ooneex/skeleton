import type { SVGProps } from "react";

export const ParkingSignIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M13 12H10V8H13C14.1046 8 15 8.89543 15 10C15 11.1046 14.1046 12 13 12Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 2C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34314 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H19ZM8 6V18H10V14H13C15.2091 14 17 12.2091 17 10C17 7.79086 15.2091 6 13 6H8Z"
        fill="currentColor"
      />
    </svg>
  );
};
