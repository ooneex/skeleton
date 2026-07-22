import type { SVGProps } from "react";

export const AxisXIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9999 1V18H29.9999V20H13.4141L2.99991 30.4142L1.58569 29L11.9999 18.5858V1H13.9999Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.071 27.5566L31.5563 19.0713L23.071 10.586L21.6568 12.0002L28.7279 19.0713L21.6568 26.1424L23.071 27.5566Z"
        fill="currentColor"
      />
    </svg>
  );
};
