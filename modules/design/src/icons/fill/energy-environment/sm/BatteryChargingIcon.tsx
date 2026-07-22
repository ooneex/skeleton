import type { SVGProps } from "react";

export const BatteryChargingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="21" y="8" width="3" height="8" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m19,4H4c-1.654,0-3,1.346-3,3v10c0,1.654,1.346,3,3,3h15c1.654,0,3-1.346,3-3V7c0-1.654-1.346-3-3-3Zm-2.657,10.372l-4.343-2.605v4l-7.372-4.424,1.029-1.715,4.343,2.605v-4l7.372,4.424-1.029,1.715Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
