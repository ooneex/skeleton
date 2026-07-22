import type { SVGProps } from "react";

export const FormIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M44 12L44 36L4 36L4 12L44 12Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 9L4 9L4 6L44 6L44 9Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M44 42L24 42L24 39L44 39L44 42Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
