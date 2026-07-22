import type { SVGProps } from "react";

export const BeltIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.5 16C45.433 16 47 17.567 47 19.5V28.5C47 30.433 45.433 32 43.5 32H35V16H43.5ZM40.5 22.25C39.5335 22.25 38.75 23.0335 38.75 24C38.75 24.9665 39.5335 25.75 40.5 25.75C41.4665 25.75 42.25 24.9665 42.25 24C42.25 23.0335 41.4665 22.25 40.5 22.25Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 16C2.567 16 1 17.567 1 19.5V28.5C1 30.433 2.567 32 4.5 32H13V16H4.5ZM7.5 22.25C8.4665 22.25 9.25 23.0335 9.25 24C9.25 24.9665 8.4665 25.75 7.5 25.75C6.5335 25.75 5.75 24.9665 5.75 24C5.75 23.0335 6.5335 22.25 7.5 22.25Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M32 33H16V25.5H25V22.5H16V15H32V33Z" fill="currentColor" />
    </svg>
  );
};
