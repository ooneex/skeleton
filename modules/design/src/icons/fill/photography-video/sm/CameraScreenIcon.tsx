import type { SVGProps } from "react";

export const CameraScreenIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 8C23 6.34314 21.6569 5 20 5H17.5352L15.5352 2H8.46482L6.46482 5L4 5C2.34315 5 1 6.34314 1 8V18C1 19.6569 2.34315 21 4 21H20C21.6569 21 23 19.6569 23 18V8ZM5 9H15V17H5V9ZM19 9H17V17H19V9Z"
        fill="currentColor"
      />
    </svg>
  );
};
