import type { SVGProps } from "react";

export const WaterBottleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11 0H13V4H11V0Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 7C16.6569 7 18 8.34315 18 10V10.5C16.8954 10.5 16 11.3954 16 12.5C16 13.6046 16.8954 14.5 18 14.5V20C18 21.6569 16.6569 23 15 23H9C7.34315 23 6 21.6569 6 20V14.5C7.10457 14.5 8 13.6046 8 12.5V12.4365C8 11.332 7.10457 10.4365 6 10.4365V10C6 8.34315 7.34315 7 9 7H15ZM10.0049 18V20H14.0049V18H10.0049Z"
        fill="currentColor"
      />
      <path d="M8 5V4C8 2.89543 8.89543 2 10 2H14C15.1046 2 16 2.89543 16 4V5H8Z" fill="currentColor" />
    </svg>
  );
};
