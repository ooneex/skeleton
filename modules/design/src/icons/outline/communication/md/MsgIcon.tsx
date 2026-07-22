import type { SVGProps } from "react";

export const MsgIcon = (props: SVGProps<SVGSVGElement>) => {
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
    </svg>
  );
};
