import type { SVGProps } from "react";

export const EraserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 7V25L6 25V7L26 7ZM11 15H9V22H11V15Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M7 3.99999C7 2.34313 8.34315 0.99999 10 0.999991L22 0.999992C23.6569 0.999992 25 2.34314 25 3.99999L25 5L7 5L7 3.99999Z"
        fill="currentColor"
      />
      <path
        d="M7 28C7 29.6569 8.34315 31 10 31L22 31C23.6569 31 25 29.6569 25 28L25 27L7 27L7 28Z"
        fill="currentColor"
      />
    </svg>
  );
};
