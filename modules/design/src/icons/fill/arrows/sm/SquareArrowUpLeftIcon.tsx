import type { SVGProps } from "react";

export const SquareArrowUpLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 5C22 3.34315 20.6569 2 19 2H5C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34314 22 5 22H19C20.6569 22 22 20.6569 22 19V5ZM14 6L14 8L9.41421 8L15.4142 14L14 15.4142L8 9.41422L8 14H6V6H14Z"
        fill="currentColor"
      />
    </svg>
  );
};
