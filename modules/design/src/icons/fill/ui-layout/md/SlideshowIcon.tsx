import type { SVGProps } from "react";

export const SlideshowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M31 3H1V24L31 24V3Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 28C14 26.8954 14.8954 26 16 26C17.1046 26 18 26.8954 18 28C18 29.1046 17.1046 30 16 30C14.8954 30 14 29.1046 14 28Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 28C22 26.8954 22.8954 26 24 26C25.1046 26 26 26.8954 26 28C26 29.1046 25.1046 30 24 30C22.8954 30 22 29.1046 22 28Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 28C6 26.8954 6.89543 26 8 26C9.10457 26 10 26.8954 10 28C10 29.1046 9.10457 30 8 30C6.89543 30 6 29.1046 6 28Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
