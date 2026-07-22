import type { SVGProps } from "react";

export const CalendarClockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <rect x="8" width="2" height="3" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <rect x="22" width="2" height="3" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m27,3H5c-2.206,0-4,1.794-4,4v17.913c0,2.253,1.833,4.087,4.087,4.087h9.913v-2H5.087c-1.15,0-2.087-.936-2.087-2.087v-11.913h26v3h2V7c0-2.206-1.794-4-4-4Zm-17,5h-2v-3h2v3Zm14,0h-2v-3h2v3Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m24,16c-4.418,0-8,3.582-8,8s3.582,8,8,8,8-3.582,8-8-3.582-8-8-8Zm3.277,11.387l-4.277-2.852v-4.535h2v3.465l3.387,2.258-1.109,1.664Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
