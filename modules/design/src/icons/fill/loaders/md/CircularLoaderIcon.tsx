import type { SVGProps } from "react";

export const CircularLoaderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        opacity="0.4"
        d="M29 16C29 8.8203 23.1797 3 16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29C23.1797 29 29 23.1797 29 16ZM31 16C31 24.2843 24.2843 31 16 31C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16Z"
        fill="currentColor"
      />
      <path d="M16 1C24.2843 1 31 7.71573 31 16H29C29 8.8203 23.1797 3 16 3V1Z" fill="currentColor" />
    </svg>
  );
};
