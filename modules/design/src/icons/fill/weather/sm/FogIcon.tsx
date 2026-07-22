import type { SVGProps } from "react";

export const FogIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 15L16 15V17L5 17L5 15Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M8 11L24 11V13L8 13V11Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M9 19L17 19V21L9 21V19Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 3L13 3V5L5 5L5 3Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 7L17 7V9L6 9L6 7Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M18 15H22V17H18V15Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M0 7H4V9H0V7Z" fill="currentColor" />
    </svg>
  );
};
