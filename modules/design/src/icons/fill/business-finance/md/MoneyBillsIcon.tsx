import type { SVGProps } from "react";

export const MoneyBillsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 7H0V29H32V7ZM4 23V25H8V23H4ZM24 11H28V13H24V11ZM16 13C13.2386 13 11 15.2386 11 18C11 20.7614 13.2386 23 16 23C18.7614 23 21 20.7614 21 18C21 15.2386 18.7614 13 16 13Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 3H28V5H4V3Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
