import type { SVGProps } from "react";

export const LockConnectionIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 6C8.34315 6 7 7.34315 7 9V13H5V9C5 6.23858 7.23858 4 10 4C12.7614 4 15 6.23858 15 9V13H13V9C13 7.34315 11.6569 6 10 6Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 0L17 -1.82958e-07C20.866 -8.90272e-07 24 3.13401 24 7L24 8L22 8L22 7C22 4.23857 19.7614 2 17 2L16 2L16 0Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 4L17 4C18.6569 4 20 5.34314 20 7L20 8L18 8L18 7C18 6.44771 17.5523 6 17 6L16 6L16 4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 11C2.34315 11 1 12.3431 1 14V20C1 21.6569 2.34315 23 4 23H16C17.6569 23 19 21.6569 19 20V14C19 12.3431 17.6569 11 16 11H4ZM11 19V15H9V19H11Z"
        fill="currentColor"
      />
    </svg>
  );
};
