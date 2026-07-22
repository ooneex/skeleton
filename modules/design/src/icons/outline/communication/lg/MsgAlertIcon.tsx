import type { SVGProps } from "react";

export const MsgAlertIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 14V27"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M24 6C12.402 6 3 14.0595 3 24C3 27.6315 4.266 31.0065 6.423 33.834L4.5 42L13.9065 39.7845C16.902 41.1945 20.34 42 24 42C35.598 42 45 33.9405 45 24C45 14.0595 35.598 6 24 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M24 34C24.5523 34 25 33.5523 25 33C25 32.4477 24.5523 32 24 32C23.4477 32 23 32.4477 23 33C23 33.5523 23.4477 34 24 34Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
      />
    </svg>
  );
};
