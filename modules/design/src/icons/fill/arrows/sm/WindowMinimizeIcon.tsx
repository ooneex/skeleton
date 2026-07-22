import type { SVGProps } from "react";

export const WindowMinimizeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M8.41421 15L11.2071 12.2071L9.79289 10.7929L7 13.5858V11H5V17H11V15H8.41421Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 6C23 4.34315 21.6569 3 20 3H4C2.34315 3 1 4.34315 1 6V18C1 19.6569 2.34314 21 4 21H20C21.6569 21 23 19.6569 23 18V6ZM3 9L3 18C3 18.5523 3.44771 19 4 19H20C20.5523 19 21 18.5523 21 18V9H3Z"
        fill="currentColor"
      />
    </svg>
  );
};
