import type { SVGProps } from "react";

export const CircleCopyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 14C38.8366 14 46 21.1634 46 30C46 38.8366 38.8366 46 30 46C21.1634 46 14 38.8366 14 30C14 21.1634 21.1634 14 30 14Z"
        fill="currentColor"
      />
      <path
        d="M32.4678 11.1588C29.9032 5.74462 24.3889 2 18 2C9.16344 2 2 9.16344 2 18C2 24.3889 5.74462 29.9032 11.1588 32.4678C11.054 31.66 11 30.8363 11 30C11 19.5066 19.5066 11 30 11C30.8363 11 31.66 11.054 32.4678 11.1588Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
