import type { SVGProps } from "react";

export const OpenInBrowserIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M8.49991 16.9142L7.08569 15.5L11.9999 10.5858L16.9141 15.5L15.4999 16.9142L12.9999 14.4142V20H10.9999V14.4142L8.49991 16.9142Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 6C23 4.34315 21.6569 3 20 3H4C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34314 21 4 21H20C21.6569 21 23 19.6569 23 18V6ZM3 9L3 18C3 18.5523 3.44772 19 4 19H20C20.5523 19 21 18.5523 21 18V9H3Z"
        fill="currentColor"
      />
    </svg>
  );
};
