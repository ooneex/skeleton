import type { SVGProps } from "react";

export const DecisionProcessIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 22H19.5V19H17.5V20H14V22Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 2H19.5V5H17.5V4H14V2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M8 6V18H6V6H8Z" fill="currentColor" data-color="color-2" />
      <path d="M2 16V22H12V16H2Z" fill="currentColor" />
      <path d="M2 2V8H12V2H2Z" fill="currentColor" />
      <path d="M18.5 6.48141L13.6712 12L18.5 17.5186L23.3288 12L18.5 6.48141Z" fill="currentColor" />
    </svg>
  );
};
