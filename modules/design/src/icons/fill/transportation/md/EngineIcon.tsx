import type { SVGProps } from "react";

export const EngineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 21L24 21L24 19L31 19L31 21Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 2V9H12V2H14Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 26L29 14L31 14L31 26L29 26Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M7.48171 7L3.95393 12H0V23H3.85725L6.38503 28H26V13H22.0999L18.5721 7H7.48171Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.00001 2H19V4H7.00001V2Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
