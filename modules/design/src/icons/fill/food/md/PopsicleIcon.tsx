import type { SVGProps } from "react";

export const PopsicleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M13 25V28C13 29.6569 14.3431 31 16 31C17.6569 31 19 29.6569 19 28V25H13Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 1C20.9706 1 25 5.02944 25 10V23H7L7.01172 9.53711C7.25264 4.78166 11.1847 1 16 1ZM12 9V19H14V9H12ZM18 19H20V9H18V19Z"
        fill="currentColor"
      />
    </svg>
  );
};
