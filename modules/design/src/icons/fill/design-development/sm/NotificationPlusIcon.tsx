import type { SVGProps } from "react";

export const NotificationPlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <polygon
        points="24 4 20 4 20 0 18 0 18 4 14 4 14 6 18 6 18 10 20 10 20 6 24 6 24 4"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m19,21H6c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h6v2h-6c-.551,0-1,.448-1,1v13c0,.552.449,1,1,1h13c.551,0,1-.448,1-1v-6h2v6c0,1.654-1.346,3-3,3Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
