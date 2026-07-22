import type { SVGProps } from "react";

export const CircleCheckPlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3C8.8203 3 3 8.8203 3 16C3 23.1797 8.8203 29 16 29H17V31H16C7.71573 31 1 24.2843 1 16C1 7.71573 7.71573 1 16 1C24.2843 1 31 7.71573 31 16V17H29V16C29 8.8203 23.1797 3 16 3Z"
        fill="currentColor"
      />
      <path
        d="M26.5 24.5V19H24.5V24.5H19V26.5H24.5V32H26.5V26.5H32V24.5H26.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.413 10.4406L12.8961 22.9677L7.58643 17.333L9.042 15.9614L12.878 20.0323L22.9407 9.08704L24.413 10.4406Z"
        fill="currentColor"
      />
    </svg>
  );
};
