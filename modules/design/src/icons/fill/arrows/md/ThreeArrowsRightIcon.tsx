import type { SVGProps } from "react";

export const ThreeArrowsRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 15H29.5V17H3V15Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 5H15.5V7H3V5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 25H19.5V27H3V25Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.4999 10.5858L30.9141 16L25.4999 21.4142L24.0857 20L28.0857 16L24.0857 12L25.4999 10.5858Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.4999 0.585815L16.9141 6.00003L11.4999 11.4142L10.0857 10L14.0857 6.00003L10.0857 2.00003L11.4999 0.585815Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5002 20.5858L20.9144 26L15.5002 31.4142L14.0859 30L18.0859 26L14.0859 22L15.5002 20.5858Z"
        fill="currentColor"
      />
    </svg>
  );
};
