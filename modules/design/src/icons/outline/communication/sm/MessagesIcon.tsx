import type { SVGProps } from "react";

export const MessagesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m16,2H4c-1.105,0-2,.895-2,2v8c0,1.105.895,2,2,2h1v5l7-5h4c1.105,0,2-.895,2-2V4c0-1.105-.895-2-2-2Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m22,7v9c0,1.105-.895,2-2,2h-1s0,4,0,4l-5-4h-2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
    </svg>
  );
};
