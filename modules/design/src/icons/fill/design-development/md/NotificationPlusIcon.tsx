import type { SVGProps } from "react";

export const NotificationPlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m24,10v-2h-2c-1.104,0-2-.896-2-2v-2H6c-2.206,0-4,1.794-4,4v18c0,2.206,1.794,4,4,4h18c2.206,0,4-1.794,4-4v-14h-2c-1.104,0-2-.896-2-2Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <polygon
        points="32 4 28 4 28 0 26 0 26 4 22 4 22 6 26 6 26 10 28 10 28 6 32 6 32 4"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
    </svg>
  );
};
