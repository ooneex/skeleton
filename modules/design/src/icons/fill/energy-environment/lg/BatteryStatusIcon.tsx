import type { SVGProps } from "react";

export const BatteryStatusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M18 2H30V5H28H20H18V2Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 7H31C34.3137 7 37 9.68629 37 13L37 40C37 43.3137 34.3137 46 31 46H17C13.6863 46 11 43.3137 11 40L11 13C11 9.6863 13.6863 7 17 7ZM32 40V34H16L16 40H32ZM32 24V30H16L16 24H32ZM32 20V14H16L16 20H32Z"
        fill="currentColor"
      />
    </svg>
  );
};
