import type { SVGProps } from "react";

export const CreditCardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 24V12H31V24C31 26.2091 29.2091 28 27 28H5C2.79086 28 1 26.2091 1 24ZM5 21V23H10V21H5Z"
        fill="currentColor"
      />
      <path d="M1 8C1 5.79086 2.79086 4 5 4H27C29.2091 4 31 5.79086 31 8L1 8Z" fill="currentColor" />
    </svg>
  );
};
