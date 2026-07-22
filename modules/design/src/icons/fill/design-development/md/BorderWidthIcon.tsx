import type { SVGProps } from "react";

export const BorderWidthIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M29 16L3 16L3 2L29 2L29 16Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M29 26L3 26L3 18L29 18L29 26Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29 30L3 30L3 28L29 28L29 30Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
