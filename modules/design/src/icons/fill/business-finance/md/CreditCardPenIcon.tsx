import type { SVGProps } from "react";

export const CreditCardPenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M1 8C1 5.79086 2.79086 4 5 4H27C29.2091 4 31 5.79086 31 8L1 8Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 12V24C1 26.2091 2.79086 28 5 28H15.1591L15.4374 24.724L24.485 15.6766C26.2488 13.9128 28.9056 13.5863 31 14.6969V12H1ZM5 23V21H10V23H5Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.8991 17.0908C27.2827 15.7074 29.5258 15.7074 30.9093 17.0908C32.2928 18.4744 32.2928 20.7175 30.9093 22.101L22.3785 30.6317L16.9033 31.0966L17.3683 25.6215L25.8991 17.0908Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
