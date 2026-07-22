import type { SVGProps } from "react";

export const UsbIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M6 1H18V9L15 9V6H13V9H11V6H9V9H6V1Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 16V11H20V16C20 20.4183 16.4183 24 12 24C7.58172 24 4 20.4183 4 16ZM14 17V15H10V17H14Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
