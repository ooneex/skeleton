import type { SVGProps } from "react";

export const LightSwitchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon points="13 12 13 8 11 8 10.979 12 13 12" strokeWidth="0" fill="currentColor" />
      <path
        d="m19,2H5c-1.654,0-3,1.346-3,3v14c0,1.654,1.346,3,3,3h14c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3Zm-4.25,16h-5.5l-1.335-1.781,1.085-4.342v-5.877h6v5.877l1.085,4.342-1.335,1.781Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
