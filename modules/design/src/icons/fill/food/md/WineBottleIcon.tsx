import type { SVGProps } from "react";

export const WineBottleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 11.0898L19.5527 11.2178C22.165 11.9164 23.9999 14.2879 24 17.0137V32H8V17.0137C8.00012 14.1999 9.95589 11.7646 12.7031 11.1562L13 11.0898V7H19V11.0898ZM11 26H21V18H11V26Z"
        fill="currentColor"
      />
      <path
        d="M17 0C18.1046 0 19 0.89543 19 2V5H13V2C13 0.895431 13.8954 0 15 0H17Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
