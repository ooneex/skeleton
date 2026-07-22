import type { SVGProps } from "react";

export const BatteryStatusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 1H15V4H13V3H11V4H9V1Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3H8C6.34315 3 5 4.34315 5 6L5 20C5 21.6569 6.34315 23 8 23H16C17.6569 23 19 21.6569 19 20V6C19 4.34315 17.6569 3 16 3ZM9 16V18H15V16H9ZM9 12H15V14H9V12ZM9 8V10H15V8H9Z"
        fill="currentColor"
      />
    </svg>
  );
};
