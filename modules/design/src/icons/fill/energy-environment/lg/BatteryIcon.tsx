import type { SVGProps } from "react";

export const BatteryIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M46 30V18H42V30H46Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 9H37C40.3137 9 43 11.6863 43 15V33C43 36.3137 40.3137 39 37 39H8C4.68629 39 2 36.3137 2 33V15C2 11.6863 4.68629 9 8 9ZM9 32H30L21.1111 16H9V32Z"
        fill="currentColor"
      />
    </svg>
  );
};
