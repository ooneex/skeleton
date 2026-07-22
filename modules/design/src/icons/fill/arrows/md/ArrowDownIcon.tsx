import type { SVGProps } from "react";

export const ArrowDownIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 2L15 29H17L17 2L15 2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.99991 17.5858L15.9999 27.5858L25.9999 17.5858L27.4141 19L15.9999 30.4142L4.58569 19L5.99991 17.5858Z"
        fill="currentColor"
      />
    </svg>
  );
};
