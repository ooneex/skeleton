import type { SVGProps } from "react";

export const AtmMachineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 2C24.2091 2 26 3.79086 26 6L26 22H6V6C6 3.79086 7.79086 2 10 2H22ZM22 5L10 5L10 13L22 13V5ZM17 16V18H22V16H17Z"
        fill="currentColor"
      />
      <path d="M29 24H3V29H29V24Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
