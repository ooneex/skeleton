import type { SVGProps } from "react";

export const CalendarCheckInIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="8" width="2" height="3" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="22" width="2" height="3" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <polygon
        points="31 22 20.414 22 24.414 18 23 16.586 16.586 23 23 29.414 24.414 28 20.414 24 31 24 31 22"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m27,3H5c-2.206,0-4,1.794-4,4v17.913c0,2.253,1.833,4.087,4.087,4.087h11.913v-2H5.087c-1.15,0-2.087-.936-2.087-2.087v-11.913h26v6h2V7c0-2.206-1.794-4-4-4Zm-17,5h-2v-3h2v3Zm14,0h-2v-3h2v3Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
