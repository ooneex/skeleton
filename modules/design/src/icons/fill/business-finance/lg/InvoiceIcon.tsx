import type { SVGProps } from "react";

export const InvoiceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41 2H7V46L12 42.25L16 45.25L20 42.25L24 45.25L28 42.25L32 45.25L36 42.25L41 46L41 2ZM24 8C20.134 8 17 11.134 17 15C17 18.866 20.134 22 24 22C27.866 22 31 18.866 31 15C31 11.134 27.866 8 24 8ZM15 29L15 26L25 26V29L15 29ZM33 29H28V26H33V29ZM21 35V32H15V35H21Z"
        fill="currentColor"
      />
    </svg>
  );
};
