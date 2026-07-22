import type { SVGProps } from "react";

export const FloatRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 20C30 18.3431 31.3431 17 33 17H41C42.6569 17 44 18.3431 44 20V28C44 29.6569 42.6569 31 41 31H33C31.3431 31 30 29.6569 30 28V20Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 16.5H24V19.5H4V16.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 40.5H44V43.5H4V40.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 4.5H44V7.5H4V4.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 28.5H24V31.5H4V28.5Z" fill="currentColor" />
    </svg>
  );
};
