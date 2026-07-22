import type { SVGProps } from "react";

export const AlertWarningIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.5 4V34H22.5V4H25.5Z" fill="currentColor" />
      <path
        d="M24 44C25.3807 44 26.5 42.8807 26.5 41.5C26.5 40.1193 25.3807 39 24 39C22.6193 39 21.5 40.1193 21.5 41.5C21.5 42.8807 22.6193 44 24 44Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
