import type { SVGProps } from "react";

export const ScreenSharingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="5" y="20" width="14" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m20,2H4c-1.654,0-3,1.346-3,3v10c0,1.654,1.346,3,3,3h16c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3Zm-9.707,10.707l-4.293-4.293v3.586h-2v-7h7v2h-3.586l4.293,4.293-1.414,1.414Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
