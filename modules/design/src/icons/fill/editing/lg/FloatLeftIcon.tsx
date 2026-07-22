import type { SVGProps } from "react";

export const FloatLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 20C18 18.3431 16.6569 17 15 17H7C5.34315 17 4 18.3431 4 20V28C4 29.6569 5.34315 31 7 31H15C16.6569 31 18 29.6569 18 28V20Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M44 16.5H24V19.5H44V16.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M44 40.5H4V43.5H44V40.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M44 4.5H4V7.5H44V4.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M44 28.5H24V31.5H44V28.5Z" fill="currentColor" />
    </svg>
  );
};
