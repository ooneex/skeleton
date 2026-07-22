import type { SVGProps } from "react";

export const DeskDrawerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M44 42L41 42L41 23L44 23L44 42Z" fill="currentColor" />
      <path d="M22 42L19 42L19 23L22 23L22 42Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7 16L7 42L4 42L4 16L7 16Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 13L44 12C44 8.68629 41.3137 6 38 6L10 6C6.68629 6 4 8.68629 4 12L4 13L5 13L43 13L44 13Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 16H19V26H44V16ZM35 22.5V19.5H28V22.5H35Z"
        fill="currentColor"
      />
    </svg>
  );
};
