import type { SVGProps } from "react";

export const SquareArrowUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 19C2 20.6569 3.34315 22 5 22L19 22C20.6569 22 22 20.6569 22 19L22 5C22 3.34315 20.6569 2 19 2L5 2C3.34315 2 2 3.34315 2 5V19ZM16.2427 12.657L13 9.41433L13 18.0001L11 18.0001L11 9.4144L7.7574 12.657L6.34318 11.2428L12 5.58594L17.6569 11.2428L16.2427 12.657Z"
        fill="currentColor"
      />
    </svg>
  );
};
