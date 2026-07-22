import type { SVGProps } from "react";

export const SquareStreamingIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 2C20.6569 2 22 3.34315 22 5V19C22 20.6569 20.6569 22 19 22H5C3.34314 22 2 20.6569 2 19V5C2 3.34315 3.34315 2 5 2H19ZM6 16V18H13V16H6ZM15 16H18V18H15V16ZM16.5 10L9.5 6V14L16.5 10Z"
        fill="currentColor"
      />
    </svg>
  );
};
