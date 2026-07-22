import type { SVGProps } from "react";

export const MessageBubbleUserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="m11,21c-3.86,0-7,3.14-7,7h14c0-3.86-3.14-7-7-7Z" strokeWidth="0" fill="currentColor" />
      <circle cx="11" cy="16" r="4" strokeWidth="0" fill="currentColor" />
      <path
        d="m25,29H5c-2.206,0-4-1.794-4-4v-15c0-2.206,1.794-4,4-4h9v2H5c-1.103,0-2,.897-2,2v15c0,1.103.897,2,2,2h20c1.103,0,2-.897,2-2v-10h2v10c0,2.206-1.794,4-4,4Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m29.5,1h-11c-1.378,0-2.5,1.122-2.5,2.5v7c0,1.378,1.122,2.5,2.5,2.5h.5v3.766l6.277-3.766h4.223c1.378,0,2.5-1.122,2.5-2.5V3.5c0-1.378-1.122-2.5-2.5-2.5Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
