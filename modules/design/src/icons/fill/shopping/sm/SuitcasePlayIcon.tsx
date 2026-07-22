import type { SVGProps } from "react";

export const SuitcasePlayIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 1H17V7H15V3H9V7H7V1Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 8C23 6.34315 21.6569 5 20 5H4C2.34315 5 1 6.34315 1 8V19C1 20.6569 2.34315 22 4 22H20C21.6569 22 23 20.6569 23 19V8ZM17.5883 13.5L9 8.81543V18.1845L17.5883 13.5Z"
        fill="currentColor"
      />
    </svg>
  );
};
