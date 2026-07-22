import type { SVGProps } from "react";

export const MarkdownIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 27L32 5H0V27L32 27ZM24 10H22V15.4951H17.9696L23.0001 22.2024L28.0306 15.4951H24V10ZM5 10V22H7V12.5639L10.5 17.557L14 12.5639V22H16V10H13.3548L10.5 14.0726L7.64525 10H5Z"
        fill="currentColor"
      />
    </svg>
  );
};
