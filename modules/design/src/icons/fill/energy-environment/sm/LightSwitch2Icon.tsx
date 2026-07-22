import type { SVGProps } from "react";

export const LightSwitch2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 2H11L11 22H5C3.34314 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2ZM5 14V18H8V14H5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 22H13V2H19C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22ZM16 14V18H19V14H16Z"
        fill="currentColor"
      />
    </svg>
  );
};
