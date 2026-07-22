import type { SVGProps } from "react";

export const TypeScaleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M36.5 21V41H33.5V21H36.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M26 21H44V24H26V21Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M19.5 7V41H16.5V7H19.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 7H32V10H4V7Z" fill="currentColor" />
    </svg>
  );
};
