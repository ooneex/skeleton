import type { SVGProps } from "react";

export const CurvedArrowDownIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 4C7.80557 4.00001 4 7.80558 4 12.5V21H2V12.5C2 6.70101 6.701 2.00001 12.5 2C18.299 1.99999 23 6.701 23 12.5V29.5H21V12.5C21 7.80557 17.1944 3.99999 12.5 4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M29.0001 21.0858L22.0001 28.0858L15.0001 21.0858L13.5859 22.5L22.0001 30.9142L30.4143 22.5L29.0001 21.0858Z"
        fill="currentColor"
      />
    </svg>
  );
};
