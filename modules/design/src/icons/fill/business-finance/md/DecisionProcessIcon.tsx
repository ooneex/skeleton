import type { SVGProps } from "react";

export const DecisionProcessIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M10 8V24H8V8H10Z" fill="currentColor" data-color="color-2" />
      <path d="M2 2V10H16V2H2Z" fill="currentColor" />
      <path d="M2 22V30H16V22H2Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5 8.33333L31.25 16L25.5 23.6667L19.75 16L25.5 8.33333Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 2H26.5V6H24.5V4H18V2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 30H26.5V26H24.5V28H18V30Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
