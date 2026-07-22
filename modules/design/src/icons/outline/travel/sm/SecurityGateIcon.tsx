import type { SVGProps } from "react";

export const SecurityGateIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m12,8h0c-.829,0-1.5-.671-1.5-1.5h0c0-.829.671-1.5,1.5-1.5h0c.829,0,1.5.671,1.5,1.5h0c0,.829-.671,1.5-1.5,1.5Z"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        fill="currentColor"
      />
      <polyline
        points="3 22 3 2 21 2 21 22"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <path
        d="m13.75,22h-3.5l-.25-5-2-1,.901-3.603c.064-.255.223-.483.449-.617,1.767-1.041,3.534-1.041,5.301,0,.226.133.385.362.449.617l.901,3.603-2,1-.25,5Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
    </svg>
  );
};
