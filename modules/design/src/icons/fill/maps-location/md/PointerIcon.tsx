import type { SVGProps } from "react";

export const PointerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.52332 4.52319L31.8121 12.5493L18.7028 18.7026L12.5494 31.8119L4.52332 4.52319Z"
        fill="currentColor"
      />
    </svg>
  );
};
