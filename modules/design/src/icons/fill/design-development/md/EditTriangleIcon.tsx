import type { SVGProps } from "react";

export const EditTriangleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.1262 7.66418L25.6642 23.3738L27.3738 22.3358L17.8358 6.62622L16.1262 7.66418Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8738 7.66418L6.3358 23.3738L4.62622 22.3358L14.1642 6.62622L15.8738 7.66418Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M7 24H25V26H7V24Z" fill="currentColor" data-color="color-2" />
      <path d="M19.5 1.5H12.5V8.5H19.5V1.5Z" fill="currentColor" />
      <path d="M30.5 21.5H23.5V28.5H30.5V21.5Z" fill="currentColor" />
      <path d="M8.5 21.5H1.5V28.5H8.5V21.5Z" fill="currentColor" />
    </svg>
  );
};
