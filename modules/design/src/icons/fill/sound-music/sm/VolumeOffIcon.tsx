import type { SVGProps } from "react";

export const VolumeOffIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5 18C3.34315 18 2 16.6568 2 15V8.99999C2 7.34313 3.34315 5.99999 5 5.99999H11.7132L21 0.19574V5L8.3566 18H5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.9142 4.00003L4.5 23.4142L3.08578 22L22.5 2.58582L23.9142 4.00003Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M21 9.74268L12.3467 18.3959L21 23.8042V9.74268Z" fill="currentColor" />
    </svg>
  );
};
