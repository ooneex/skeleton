import type { SVGProps } from "react";

export const BathroomCabinetIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M11 5H15V7H11V5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 4C7 2.34315 8.34315 1 10 1C11.6569 1 13 2.34315 13 4V11H11V4C11 3.44772 10.5523 3 10 3C9.44772 3 9 3.44772 9 4V5H7V4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M23 21H9V16H23V21Z" fill="currentColor" />
      <path d="M4 9H7V21H1V12C1 10.3431 2.34315 9 4 9Z" fill="currentColor" data-color="color-2" />
      <path d="M9 14H23V12C23 10.3431 21.6569 9 20 9L9 9V14Z" fill="currentColor" />
    </svg>
  );
};
