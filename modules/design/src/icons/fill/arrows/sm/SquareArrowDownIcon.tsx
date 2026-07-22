import type { SVGProps } from "react";

export const SquareArrowDownIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 5C2 3.34315 3.34315 2 5 2L19 2C20.6569 2 22 3.34314 22 5L22 19C22 20.6569 20.6569 22 19 22L5 22C3.34315 22 2 20.6569 2 19V5ZM16.2427 11.343L13 14.5857L13 5.99988L11 5.99988L11 14.5856L7.7574 11.343L6.34318 12.7572L12 18.4141L17.6569 12.7572L16.2427 11.343Z"
        fill="currentColor"
      />
    </svg>
  );
};
