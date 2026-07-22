import type { SVGProps } from "react";

export const MessagesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m28,9c1.105,0,2,.895,2,2v11c0,1.105-.895,2-2,2h-2v5l-7-5h-4"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m22,3H4c-1.105,0-2,.895-2,2v12c0,1.105.895,2,2,2h3v6l8-6h7c1.105,0,2-.895,2-2V5c0-1.105-.895-2-2-2Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
