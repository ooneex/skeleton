import type { SVGProps } from "react";

export const CalendarCheck2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="14.469 25 10.09 19.892 11.608 18.59 14.531 22 21.451 14.586 22.913 15.951 14.469 25"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <rect x="8" width="2" height="3" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="22" width="2" height="3" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m27,3H5c-2.206,0-4,1.794-4,4v17.913c0,2.253,1.833,4.087,4.087,4.087h21.826c2.253,0,4.087-1.833,4.087-4.087V7c0-2.206-1.794-4-4-4Zm-5,2h2v3h-2v-3Zm-14,0h2v3h-2v-3Zm21,19.913c0,1.151-.936,2.087-2.087,2.087H5.087c-1.151,0-2.087-.936-2.087-2.087v-11.913h26v11.913Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
