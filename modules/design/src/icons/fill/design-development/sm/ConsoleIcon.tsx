import type { SVGProps } from "react";

export const ConsoleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2V22H22V2H2ZM5.58579 15.5L9.08579 12L5.58579 8.5L7 7.08579L11.9142 12L7 16.9142L5.58579 15.5ZM18 13V11H14V13H18ZM18 7L11 7V9L18 9V7ZM18 15V17L11 17V15L18 15Z"
        fill="currentColor"
      />
    </svg>
  );
};
