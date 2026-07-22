import type { SVGProps } from "react";

export const BatteryLowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="32 20 28 20 28 18 30 18 30 14 28 14 28 12 32 12 32 20"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m26,5H5c-2.206,0-4,1.794-4,4v14c0,2.206,1.794,4,4,4h21c2.206,0,4-1.794,4-4v-14c0-2.206-1.794-4-4-4ZM8,22h-2v-12h2v12Zm5,0h-2v-12h2v12Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
