import type { SVGProps } from "react";

export const BatteryStatusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1H20V4H18V3H14V4H12V1Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 3H22C24.2091 3 26 4.79086 26 7V27C26 29.2091 24.2091 31 22 31H10C7.79086 31 6 29.2091 6 27L6 7C6 4.79086 7.79086 3 10 3ZM11 24V26H21V24H11ZM11 19H21V21H11V19ZM11 14V16H21V14H11Z"
        fill="currentColor"
      />
    </svg>
  );
};
