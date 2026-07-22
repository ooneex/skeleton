import type { SVGProps } from "react";

export const BluetoothIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m7,23.5l9.643-7.5m-9.643-7.5l9.643,7.5m0,0l8.357,6.5-9,6V3.5l9,6-8.357,6.5Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
