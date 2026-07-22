import type { SVGProps } from "react";

export const FolderReplaceIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M17 24V40C17 41.6569 18.3431 43 20 43H40C41.6569 43 43 41.6569 43 40V28C43 26.3431 41.6569 25 40 25H32L27 21H20C18.3431 21 17 22.3431 17 24Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12 27H8C6.34315 27 5 25.6569 5 24V8C5 6.34315 6.34315 5 8 5H15L20 9H28C29.6569 9 31 10.3431 31 12V16"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M12 43L7.5 43C6.11929 43 5 41.8807 5 40.5L5 36"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M36 5L40.5 5C41.8807 5 43 6.11929 43 7.5V12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
