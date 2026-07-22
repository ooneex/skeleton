import type { SVGProps } from "react";

export const DesignDevIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M10.5 12H22.5V14H10.5V12Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 23V6H23L23 23H10ZM13 20L13 9L20 9L20 20H13Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 1V18H8V6C8 4.89543 8.89543 4 10 4H14V1H1ZM6.91421 7.5L5.5 6.08579L2.08579 9.5L5.5 12.9142L6.91421 11.5L4.91421 9.5L6.91421 7.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
