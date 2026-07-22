import type { SVGProps } from "react";

export const PrintIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 1L6 5L18 5L18 1L6 1Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M18 14L6.00001 14L6.00001 22L18 22L18 14Z" fill="currentColor" data-color="color-2" />
      <path
        d="M4 7C2.34315 7 1 8.34315 1 10V19H3.99998L3.99998 14C3.99998 12.8954 4.89541 12 5.99998 12L18 12C18.5304 12 19.0391 12.2107 19.4142 12.5858C19.7893 12.9609 20 13.4696 20 14L20 19H23V10C23 8.34315 21.6569 7 20 7H4Z"
        fill="currentColor"
      />
    </svg>
  );
};
