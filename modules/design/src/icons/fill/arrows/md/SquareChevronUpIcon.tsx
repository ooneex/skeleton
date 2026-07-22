import type { SVGProps } from "react";

export const SquareChevronUpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 2C3.79086 2 2 3.79086 2 6V26C2 28.2091 3.79086 30 6 30H26C28.2091 30 30 28.2091 30 26V6C30 3.79086 28.2091 2 26 2H6ZM10 19.4142L8.58579 18L16 10.5858L23.4142 18L22 19.4142L16 13.4142L10 19.4142Z"
        fill="currentColor"
      />
    </svg>
  );
};
