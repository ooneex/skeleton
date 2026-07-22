import type { SVGProps } from "react";

export const ProgressBarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0363 6H33.9638L24 19.7002L14.0363 6Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 24C2.567 24 1 25.567 1 27.5V34.5C1 36.433 2.56701 38 4.5 38H43.5C45.433 38 47 36.433 47 34.5V27.5C47 25.567 45.433 24 43.5 24H4.5ZM24 35H43.5C43.7761 35 44 34.7761 44 34.5V27.5C44 27.2239 43.7761 27 43.5 27H24V35Z"
        fill="currentColor"
      />
    </svg>
  );
};
