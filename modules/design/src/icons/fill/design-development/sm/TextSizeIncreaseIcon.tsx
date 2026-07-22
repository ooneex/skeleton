import type { SVGProps } from "react";

export const TextSizeIncreaseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13 3V21H11V3H13Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 3H20V5H4V3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15 12H24V14H15V12Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.5 8.5L20.5 17.5L18.5 17.5L18.5 8.5L20.5 8.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
