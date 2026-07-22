import type { SVGProps } from "react";

export const AxisZIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0001 1V18H31.0001V20H13.4143L3.70718 29.7071L2.29297 28.2929L12.0001 18.5858V1H14.0001Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.99996 18L2 30L14 30L14 28L3.99999 28L3.99996 18L1.99996 18Z"
        fill="currentColor"
      />
    </svg>
  );
};
