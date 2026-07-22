import type { SVGProps } from "react";

export const CreditCardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 36V21H46V36C46 39.3137 43.3137 42 40 42H8C4.68629 42 2 39.3137 2 36ZM8 31.5V34.5H17V31.5H8Z"
        fill="currentColor"
      />
      <path d="M40 6C43.3137 6 46 8.68629 46 12V14H2V12C2 8.68629 4.68629 6 8 6H40Z" fill="currentColor" />
    </svg>
  );
};
