import type { SVGProps } from "react";

export const MessagesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m27,30.943l-8.32-5.943h-4.68v-2h5.32l5.68,4.057v-4.057h3c.552,0,1-.449,1-1v-11c0-.551-.448-1-1-1h-1v-2h1c1.654,0,3,1.346,3,3v11c0,1.654-1.346,3-3,3h-1v5.943Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m22,2H4c-1.654,0-3,1.346-3,3v12c0,1.654,1.346,3,3,3h2v7l9.333-7h6.667c1.654,0,3-1.346,3-3V5c0-1.654-1.346-3-3-3Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
