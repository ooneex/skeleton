import type { SVGProps } from "react";

export const FlipVerticalIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M46 22.5L46 25.5L2 25.5L2 22.5L46 22.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40.0002 19.5L10 19.5L10 2.26855L40.0002 19.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 28.5L9.99993 28.5L9.99993 45.7314L40 28.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
