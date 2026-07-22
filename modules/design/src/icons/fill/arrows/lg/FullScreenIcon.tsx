import type { SVGProps } from "react";

export const FullScreenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M9 13H39V35H9V13Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 12C2 8.68629 4.68629 6 8 6H16V9H8C6.34315 9 5 10.3431 5 12V20H2V12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 12C46 8.68629 43.3137 6 40 6H32V9H40C41.6569 9 43 10.3431 43 12V20H46V12Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 42C4.68629 42 2 39.3137 2 36L2 28L5 28L5 36C5 37.6569 6.34315 39 8 39L16 39L16 42L8 42Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 42C43.3137 42 46 39.3137 46 36L46 28L43 28L43 36C43 37.6569 41.6569 39 40 39L32 39L32 42L40 42Z"
        fill="currentColor"
      />
    </svg>
  );
};
