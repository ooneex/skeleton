import type { SVGProps } from "react";

export const InputPasswordIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m11,18h-7c-1.654,0-3-1.346-3-3V7c0-1.654,1.346-3,3-3h16c1.654,0,3,1.346,3,3v2h-2v-2c0-.551-.449-1-1-1H4c-.551,0-1,.449-1,1v8c0,.551.449,1,1,1h7v2Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m22,15v-1.5c0-1.93-1.57-3.5-3.5-3.5s-3.5,1.57-3.5,3.5v1.5c-1.103,0-2,.897-2,2v3c0,1.103.897,2,2,2h7c1.103,0,2-.897,2-2v-3c0-1.103-.897-2-2-2Zm-5-1.5c0-.827.673-1.5,1.5-1.5s1.5.673,1.5,1.5v1.5h-3v-1.5Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <circle cx="12" cy="11" r="1.25" strokeWidth="0" fill="currentColor" />
      <circle cx="7.25" cy="11" r="1.25" strokeWidth="0" fill="currentColor" />
    </svg>
  );
};
