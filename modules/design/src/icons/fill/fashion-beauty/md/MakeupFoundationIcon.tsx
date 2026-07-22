import type { SVGProps } from "react";

export const MakeupFoundationIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M12 5H20V3H25V1H12V5Z" fill="currentColor" />
      <path d="M22 12V7H10V12H22Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 11C24.2091 11 26 12.7909 26 15V27C26 29.2091 24.2091 31 22 31H10C7.85996 31 6.11211 29.3194 6.00488 27.2061L6 27V15C6 12.7909 7.79086 11 10 11H22ZM11 18V26H21V18H11Z"
        fill="currentColor"
      />
    </svg>
  );
};
