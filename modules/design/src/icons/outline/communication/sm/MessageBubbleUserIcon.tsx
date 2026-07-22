import type { SVGProps } from "react";

export const MessageBubbleUserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m8,5H3c-1.105,0-2,.895-2,2v12c0,1.105.895,2,2,2h16c1.105,0,2-.895,2-2v-6"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m12,3v4c0,1.105.895,2,2,2h1v3l4-3h2c1.105,0,2-.895,2-2V3c0-1.105-.895-2-2-2h-7c-1.105,0-2,.895-2,2Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <circle
        cx="7"
        cy="11"
        r="2"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m2.009,20.738c.134-2.642,2.316-4.738,4.991-4.738,2.761,0,5,2.239,5,5"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-cap="butt"
      />
    </svg>
  );
};
