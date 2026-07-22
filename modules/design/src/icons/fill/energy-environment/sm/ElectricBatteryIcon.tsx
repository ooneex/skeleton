import type { SVGProps } from "react";

export const ElectricBatteryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M14 0H18V2H14V0Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 0H10V2H6V0Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 3C18.6569 3 20 4.34315 20 6L20 20C20 21.6569 18.6569 23 17 23H7C5.34315 23 4 21.6569 4 20V6C4 4.34315 5.34315 3 7 3H17ZM11.6995 12L13.8598 8.11148L12.1115 7.1402L8.30048 14H12.3005L10.1402 17.8885L11.8885 18.8598L15.6995 12H11.6995Z"
        fill="currentColor"
      />
    </svg>
  );
};
