import type { SVGProps } from "react";

export const OpenRectArrowOutIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="21 15 4.414 15 10.414 9 9 7.586 .586 16 9 24.414 10.414 23 4.414 17 21 17 21 15"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m25,30h-11v-2h11c1.103,0,2-.897,2-2V6c0-1.103-.897-2-2-2h-11v-2h11c2.206,0,4,1.794,4,4v20c0,2.206-1.794,4-4,4Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
