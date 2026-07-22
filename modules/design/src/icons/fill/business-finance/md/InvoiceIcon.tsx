import type { SVGProps } from "react";

export const InvoiceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2H28L28 31.9227L21.5 27.3643L16 31.2214L10.5 27.3643L4 31.9227L4 2ZM20.5 12C20.5 14.4853 18.4853 16.5 16 16.5C13.5147 16.5 11.5 14.4853 11.5 12C11.5 9.51472 13.5147 7.5 16 7.5C18.4853 7.5 20.5 9.51472 20.5 12ZM23 20L14 20V22L23 22V20ZM9 20V22H12V20H9Z"
        fill="currentColor"
      />
    </svg>
  );
};
