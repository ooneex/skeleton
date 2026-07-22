import type { SVGProps } from "react";

export const SignalIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5 26V44H16.5V26H19.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M31.5 16V44H28.5V16H31.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7.5 36V44H4.5V36H7.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.5 4V44H40.5V4H43.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
