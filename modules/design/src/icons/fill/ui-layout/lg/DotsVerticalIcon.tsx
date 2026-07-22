import type { SVGProps } from "react";

export const DotsVerticalIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 21C25.6569 21 27 22.3431 27 24C27 25.6569 25.6569 27 24 27C22.3431 27 21 25.6569 21 24C21 22.3431 22.3431 21 24 21Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 36C25.6569 36 27 37.3431 27 39C27 40.6569 25.6569 42 24 42C22.3431 42 21 40.6569 21 39C21 37.3431 22.3431 36 24 36Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 6C25.6569 6 27 7.34315 27 9C27 10.6569 25.6569 12 24 12C22.3431 12 21 10.6569 21 9C21 7.34315 22.3431 6 24 6Z"
        fill="currentColor"
      />
    </svg>
  );
};
