import type { SVGProps } from "react";

export const WindowLayoutIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="7" y="10" width="2" height="10" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m20,3H4c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3h16c1.654,0,3-1.346,3-3V6c0-1.654-1.346-3-3-3Zm-11.25,2.75c.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25-1.25-.56-1.25-1.25.56-1.25,1.25-1.25Zm-4,0c.69,0,1.25.56,1.25,1.25s-.56,1.25-1.25,1.25-1.25-.56-1.25-1.25.56-1.25,1.25-1.25Zm16.25,12.25c0,.551-.448,1-1,1H4c-.552,0-1-.449-1-1v-7h18v7Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
