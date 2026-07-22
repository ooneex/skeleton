import type { SVGProps } from "react";

export const DeskIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M7 23L7 42L4 42L4 23L7 23Z" fill="currentColor" />
      <path d="M44 42L41 42L41 23L44 23L44 42Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 16H22.5V26H4V16ZM16.5 19.5V22.5H9.5V19.5L16.5 19.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5 16H44V26H25.5V16ZM38 19.5V22.5H31V19.5L38 19.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 13L44 12C44 8.68629 41.3137 6 38 6L10 6C6.68629 6 4 8.68629 4 12L4 13L5 13L43 13L44 13Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
