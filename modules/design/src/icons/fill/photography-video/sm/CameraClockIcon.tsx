import type { SVGProps } from "react";

export const CameraClockIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 5C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34315 21 1 19.6569 1 18V8C1 6.34314 2.34315 5 4 5L6.46482 5L8.46482 2H15.5352L17.5352 5H20ZM13 8H11V14H17V12H13V8Z"
        fill="currentColor"
      />
    </svg>
  );
};
