import type { SVGProps } from "react";

export const ApplicationsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 1H26C28.2091 1 30 2.79086 30 5V14H17V1Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 4C2.79086 4 1 5.79086 1 8V26C1 28.2091 2.79086 30 5 30H23C25.2091 30 27 28.2091 27 26V16H15V4H5ZM3 8C3 6.89543 3.89543 6 5 6H13V16H3V8ZM3 18V26C3 27.1046 3.89543 28 5 28H13V18H3ZM15 18V28H23C24.1046 28 25 27.1046 25 26V18H15Z"
        fill="currentColor"
      />
    </svg>
  );
};
