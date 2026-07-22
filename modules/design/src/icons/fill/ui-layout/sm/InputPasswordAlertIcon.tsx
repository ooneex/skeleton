import type { SVGProps } from "react";

export const InputPasswordAlertIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="12" cy="11" r="1.25" strokeWidth="0" fill="currentColor" />
      <circle cx="7.25" cy="11" r="1.25" strokeWidth="0" fill="currentColor" />
      <path
        d="m15,18H4c-1.654,0-3-1.346-3-3V7c0-1.654,1.346-3,3-3h16c1.654,0,3,1.346,3,3v6h-2v-6c0-.551-.449-1-1-1H4c-.551,0-1,.449-1,1v8c0,.551.449,1,1,1h11v2Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <rect x="17" y="10" width="2" height="7.5" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="18" cy="20.75" r="1.25" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
