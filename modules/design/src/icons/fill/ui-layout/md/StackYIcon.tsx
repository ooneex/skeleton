import type { SVGProps } from "react";

export const StackYIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 5L31 5L31 3L1 3L1 5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 29L31 29L31 27L1 27L1 29Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 10H28V22H4V10Z" fill="currentColor" />
    </svg>
  );
};
