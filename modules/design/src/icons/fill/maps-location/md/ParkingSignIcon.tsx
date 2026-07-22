import type { SVGProps } from "react";

export const ParkingSignIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M17 17H13V9H17C19.2091 9 21 10.7909 21 13C21 15.2091 19.2091 17 17 17Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6C2 3.79086 3.79086 2 6 2H26C28.2091 2 30 3.79086 30 6V26C30 28.2091 28.2091 30 26 30H6C3.79086 30 2 28.2091 2 26V6ZM11 7V25H13V19H17C20.3137 19 23 16.3137 23 13C23 9.68629 20.3137 7 17 7H11Z"
        fill="currentColor"
      />
    </svg>
  );
};
