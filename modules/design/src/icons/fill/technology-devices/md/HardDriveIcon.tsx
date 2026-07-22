import type { SVGProps } from "react";

export const HardDriveIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 25V20H31V25C31 27.2091 29.2091 29 27 29L5 29C2.79086 29 1 27.2091 1 25ZM7 23V25H25V23H7Z"
        fill="currentColor"
      />
      <path
        d="M30.846 18H1.15399L3.11333 6.33729C3.43696 4.41089 5.10465 3 7.05805 3H24.942C26.8954 3 28.563 4.41089 28.8867 6.33729L30.846 18Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
