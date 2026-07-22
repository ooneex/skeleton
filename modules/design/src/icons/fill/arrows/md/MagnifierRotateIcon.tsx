import type { SVGProps } from "react";

export const MagnifierRotateIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="m29.121,24.879l-7.021-7.021-.707.707h0s-2.828,2.828-2.828,2.828h0s-.707.707-.707.707l7.021,7.021c.585.585,1.353.877,2.121.877s1.536-.292,2.121-.877c.566-.567.879-1.32.879-2.122s-.313-1.555-.879-2.121Z"
        fill="currentColor"
        strokeWidth="0"
        data-color="color-2"
      />
      <path
        d="m21,2v3.447c-2.047-2.173-4.917-3.447-8-3.447C6.935,2,2,6.935,2,13h2c0-4.962,4.037-9,9-9,3.034,0,5.807,1.516,7.469,4h-5.469v2h8V2h-2Z"
        strokeWidth="0"
        fill="currentColor"
      />
      <path
        d="m22,13c0,4.962-4.037,9-9,9-3.034,0-5.807-1.516-7.469-4h5.469v-2H3v8h2v-3.447c2.047,2.173,4.917,3.447,8,3.447,6.065,0,11-4.935,11-11h-2Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
