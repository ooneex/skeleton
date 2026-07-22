import type { SVGProps } from "react";

export const CalendarCheckOutIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="8" width="2" height="3" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="22" width="2" height="3" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <polygon
        points="25 16.586 23.586 18 27.586 22 17 22 17 24 27.586 24 23.586 28 25 29.414 31.414 23 25 16.586"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m27,3H5c-2.206,0-4,1.794-4,4v17.913c0,2.253,1.833,4.087,4.087,4.087h11.913v-2H5.087c-1.151,0-2.087-.936-2.087-2.087v-11.913h26v4h2V7c0-2.206-1.794-4-4-4Zm-17,5h-2v-3h2v3Zm14,0h-2v-3h2v3Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
