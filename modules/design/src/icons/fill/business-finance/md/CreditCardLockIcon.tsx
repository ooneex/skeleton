import type { SVGProps } from "react";

export const CreditCardLockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M1 8C1 5.79086 2.79086 4 5 4H27C29.2091 4 31 5.79086 31 8L1 8Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 24.5C18 23.1193 19.1193 22 20.5 22H29.4999C30.8806 22 31.9999 23.1193 31.9999 24.5V28.5C31.9999 29.8807 30.8806 31 29.4999 31H20.5C19.1193 31 18 29.8807 18 28.5V24.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 18C23.8954 18 23 18.8954 23 20V24H21V20C21 17.7909 22.7909 16 25 16C27.2091 16 29 17.7909 29 20V24H27V20C27 18.8954 26.1046 18 25 18Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 12V24C1 26.2091 2.79086 28 5 28H16V24.5C16 22.5407 17.2522 20.8738 19 20.2561C19 16.8953 21.5297 14 25 14C28.3137 14 31 16.6863 31 20V12H1ZM5 23V21H10V23H5Z"
        fill="currentColor"
      />
    </svg>
  );
};
