import type { SVGProps } from "react";

export const ScreenSharingOffIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="8" y="20" width="11" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m4,18h2L21.554,2.446c-.455-.278-.983-.446-1.554-.446H4c-1.654,0-3,1.346-3,3v10c0,1.654,1.346,3,3,3Zm0-13h7v2h-3.586l4.293,4.293-1.414,1.414-4.293-4.293v3.586h-2v-7Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path d="m10.243,18h9.757c1.654,0,3-1.346,3-3V5.243l-12.757,12.757Z" strokeWidth="0" fill="currentColor" />
      <rect
        x="-3.142"
        y="11"
        width="30.284"
        height="2"
        transform="translate(-4.971 12) rotate(-45)"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
