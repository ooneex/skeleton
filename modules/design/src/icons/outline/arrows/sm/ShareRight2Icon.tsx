import type { SVGProps } from "react";

export const ShareRight2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m19,17v2c0,1.105-.895,2-2,2H4c-1.105,0-2-.895-2-2V6c0-1.105.895-2,2-2h3"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <path
        d="m22.5,9l-7.5-6v3c-4.894,0-9,2.057-9,9,1.788-2.143,4.012-3,9-3v3s7.5-6,7.5-6Z"
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
