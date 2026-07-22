import type { SVGProps } from "react";

export const FridgeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 20H42V40C42 43.3137 39.3137 46 36 46H12C8.68629 46 6 43.3137 6 40V20ZM11 33H14L14 24H11L11 33Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36 2C39.3137 2 42 4.68629 42 8V17H6V8C6 4.68629 8.68629 2 12 2H36ZM14 9H11V14H14V9Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
