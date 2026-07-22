import type { SVGProps } from "react";

export const NotificationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m26,13c-3.859,0-7-3.14-7-7,0-.695.105-1.366.295-2H6c-2.206,0-4,1.794-4,4v18c0,2.206,1.794,4,4,4h18c2.206,0,4-1.794,4-4v-13.295c-.634.19-1.305.295-2,.295Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <circle cx="26" cy="6" r="5" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
