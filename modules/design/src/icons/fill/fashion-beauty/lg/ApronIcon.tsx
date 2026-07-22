import type { SVGProps } from "react";

export const ApronIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M2 24V21H9V24H2Z" fill="currentColor" />
      <path d="M39 24V21H46V24H39Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 15C31 16.6568 32.3432 18 34 18H39.5V44.5H8.5V18H14C15.6569 18 17 16.6569 17 15V14H31V15ZM17 27V31C17 34.866 20.134 38 24 38C27.866 38 31 34.866 31 31V27H17Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M29 9C29 6.32472 26.8989 4.14053 24.2568 4.00684L24 4C21.2386 4 19 6.23858 19 9V13C19 16.3137 16.3137 19 13 19H10V43H38V19H35C31.6863 19 29 16.3137 29 13V9ZM32 13C32 14.6569 33.3431 16 35 16H41V46H7V16H13C14.6569 16 16 14.6569 16 13V9C16 4.58173 19.5817 1 24 1L24.4121 1.01074C28.6389 1.22523 32 4.71994 32 9V13Z"
        fill="currentColor"
      />
    </svg>
  );
};
