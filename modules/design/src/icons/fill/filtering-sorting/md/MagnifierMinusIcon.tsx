import type { SVGProps } from "react";

export const MagnifierMinusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m29.121,24.879l-7.021-7.021-.707.707h0s-2.828,2.828-2.828,2.828h0s-.707.707-.707.707l7.021,7.021c.585.585,1.353.877,2.121.877s1.536-.292,2.121-.877c.566-.567.879-1.32.879-2.122s-.313-1.555-.879-2.121Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m13,24c-6.065,0-11-4.935-11-11S6.935,2,13,2s11,4.935,11,11-4.935,11-11,11Zm0-20c-4.963,0-9,4.038-9,9s4.037,9,9,9,9-4.038,9-9-4.037-9-9-9Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <rect x="8" y="12" width="10" height="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
    </svg>
  );
};
