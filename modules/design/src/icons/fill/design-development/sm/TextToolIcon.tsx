import type { SVGProps } from "react";

export const TextToolIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M5 3H19V5H5V3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 19H19V21H5V19Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M19 19L19 5L21 5L21 19L19 19Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.00001 19L3.00001 5L5.00001 5L5.00001 19L3.00001 19Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 1H7V7H1V1Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 17H7V23H1V17Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 1H23V7H17V1Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 17H23V23H17V17Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 8V17H11V8H13Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8 8H16V10H8V8Z" fill="currentColor" />
    </svg>
  );
};
