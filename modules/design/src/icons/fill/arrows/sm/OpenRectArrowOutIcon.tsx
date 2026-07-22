import type { SVGProps } from "react";

export const OpenRectArrowOutIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="17 11 4.414 11 8.414 7 7 5.586 .586 12 7 18.414 8.414 17 4.414 13 17 13 17 11"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m19,23h-10v-2h10c.552,0,1-.449,1-1V4c0-.551-.448-1-1-1h-10V1h10c1.654,0,3,1.346,3,3v16c0,1.654-1.346,3-3,3Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
