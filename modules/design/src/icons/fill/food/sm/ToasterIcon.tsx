import type { SVGProps } from "react";

export const ToasterIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 19V23H4V19H6Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M20 19V23H18V19H20Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 21V12C2 10.3431 3.34315 9 5 9H19C20.6569 9 22 10.3431 22 12L22 21L2 21ZM5 15C5 13.8954 5.89543 13 7 13C8.10457 13 9 13.8954 9 15C9 16.1046 8.10457 17 7 17C5.89543 17 5 16.1046 5 15ZM19 12H17V18H19V12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 7L5 5C5 3.34314 6.34315 2 8 2L16 2C17.6569 2 19 3.34315 19 5.00001L19 7L5 7Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
