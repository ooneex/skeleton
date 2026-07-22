import type { SVGProps } from "react";

export const FridgeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 11H21V20C21 21.6569 19.6569 23 18 23H6C4.34314 23 3 21.6569 3 20V11ZM8 13H6V18H8V13Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 1C19.6569 1 21 2.34315 21 4V9H3V4C3 2.34315 4.34315 1 6 1H18ZM8 5H6V7.01L8 7.01V5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
