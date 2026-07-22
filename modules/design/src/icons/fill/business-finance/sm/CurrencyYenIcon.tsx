import type { SVGProps } from "react";

export const CurrencyYenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.2 1.59998L12 9.33331L17.8 1.59998L19.4 2.79998L12 12.6666L4.6 2.79998L6.2 1.59998Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 10V23H11V10H13Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 11H19V13H5V11Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 15H19V17H5V15Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
