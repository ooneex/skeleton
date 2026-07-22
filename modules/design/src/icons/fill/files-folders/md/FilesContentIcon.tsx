import type { SVGProps } from "react";

export const FilesContentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 25V8C27 5.23858 24.7614 3 22 3H9V1H22C25.866 1 29 4.13401 29 8V25H27Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 31C23.2091 31 25 29.2091 25 27V9C25 6.79086 23.2091 5 21 5H7C4.79086 5 3 6.79086 3 9V27C3 29.2091 4.79086 31 7 31H21ZM8 16H20V18H8V16ZM8 11V13H15V11H8ZM17 11H20V13H17V11ZM8 21V23H13V21H8Z"
        fill="currentColor"
      />
    </svg>
  );
};
