import type { SVGProps } from "react";

export const Layers2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 15H33V45H3V15Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 3H45V33.5H42V6H14.5V3Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.5 9H39V39.5H36V12H8.5V9Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
