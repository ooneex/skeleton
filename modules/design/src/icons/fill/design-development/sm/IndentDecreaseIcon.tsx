import type { SVGProps } from "react";

export const IndentDecreaseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 16H12V14L2 14L2 16Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 2H22V4H2V2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 22L22 22V20L2 20L2 22Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 8H12V10H2V8Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.9142 8L16.9142 12L20.9142 16L19.5 17.4142L14.0858 12L19.5 6.58578L20.9142 8Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
