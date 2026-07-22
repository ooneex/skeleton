import type { SVGProps } from "react";

export const BatteryFullIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="21" y="8" width="3" height="8" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m19,20H4c-1.654,0-3-1.346-3-3V7c0-1.654,1.346-3,3-3h15c1.654,0,3,1.346,3,3v10c0,1.654-1.346,3-3,3ZM4,6c-.551,0-1,.448-1,1v10c0,.552.449,1,1,1h15c.551,0,1-.448,1-1V7c0-.552-.449-1-1-1H4Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
