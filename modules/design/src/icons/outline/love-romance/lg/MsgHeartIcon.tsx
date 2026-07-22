import type { SVGProps } from "react";

export const MsgHeartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 6C12.402 6 3 14.0595 3 24C3 27.6315 4.266 31.0065 6.423 33.834L4.5 42L13.9065 39.7845C16.902 41.1945 20.34 42 24 42C35.598 42 45 33.9405 45 24C45 14.0595 35.598 6 24 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M24.0082 33.25C26.2262 32.25 34.0082 26.708 34.0082 21.628C34.0082 18.658 31.5962 16.25 28.6242 16.25C26.6642 16.25 25.2002 17.478 24.0082 18.856C22.8182 17.476 21.3522 16.25 19.3922 16.25C16.4182 16.25 14.0082 18.658 14.0082 21.628C14.0082 26.708 21.7902 32.25 24.0082 33.25Z"
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
