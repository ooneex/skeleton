import type { SVGProps } from "react";

export const ArrowsTransactionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M16 23.5C20.1421 23.5 23.5 20.1421 23.5 16C23.5 11.8579 20.1421 8.5 16 8.5C11.8579 8.5 8.5 11.8579 8.5 16C8.5 20.1421 11.8579 23.5 16 23.5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.5 0.0858163L0.585787 6.00003L16 6.00003L16 4.00003L6.5 4.00003L6.5 0.0858163Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5 31.9142L31.4142 26L16 26L16 28L25.5 28L25.5 31.9142Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
