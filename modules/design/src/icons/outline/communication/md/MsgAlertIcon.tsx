import type { SVGProps } from "react";

export const MsgAlertIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m16,4c-7.732,0-14,5.373-14,12,0,2.421.844,4.671,2.282,6.556l-1.282,5.444,6.271-1.477c1.997.94,4.289,1.477,6.729,1.477,7.732,0,14-5.373,14-12s-6.268-12-14-12Z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
      />
      <line
        x1="16"
        y1="10"
        x2="16"
        y2="18"
        fill="none"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
      <circle
        cx="16"
        cy="22.5"
        r=".5"
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="square"
        strokeMiterlimit="10"
        strokeWidth="2"
        data-color="color-2"
      />
    </svg>
  );
};
