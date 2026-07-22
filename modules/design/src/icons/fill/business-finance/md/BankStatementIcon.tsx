import type { SVGProps } from "react";

export const BankStatementIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28 17.2278L24.1094 14.634C23.4376 14.1862 22.5624 14.1862 21.8906 14.634L14.8906 19.3007C14.3342 19.6716 14 20.2961 14 20.9648V31H4L4 1H28V17.2278ZM10 10V8H17V10H10ZM22 8H19V10H22V8ZM14 13V15H10V13H14Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M30 20.5L23 16.2981L16 20.5V24H17.5V29H16V31H30V29H28.5V24H30V20.5ZM22 29H19.5V24H22V29ZM24 29H26.5V24H24V29ZM23 22C23.8284 22 24.5 21.3284 24.5 20.5C24.5 19.6716 23.8284 19 23 19C22.1716 19 21.5 19.6716 21.5 20.5C21.5 21.3284 22.1716 22 23 22Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
