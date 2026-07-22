import type { SVGProps } from "react";

export const MsgIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M24 6C12.402 6 3 14.0595 3 24C3 27.6315 4.266 31.0065 6.423 33.834L4.5 42L13.9065 39.7845C16.902 41.1945 20.34 42 24 42C35.598 42 45 33.9405 45 24C45 14.0595 35.598 6 24 6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
