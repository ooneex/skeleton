import type { SVGProps } from "react";

export const NotebookIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M1 7H5V9H1V7Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 23H5V25H1V23Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 15H5V17H1V15Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25 1C27.2091 1 29 2.79086 29 5L29 27C29 29.2091 27.2091 31 25 31H7C4.79086 31 3 29.2091 3 27V5C3 2.79086 4.79086 1 7 1H25ZM27 12H22C19.7909 12 18 13.7909 18 16C18 18.2091 19.7909 20 22 20H27V12Z"
        fill="currentColor"
      />
      <path
        d="M22 17.5C22.8284 17.5 23.5 16.8284 23.5 16C23.5 15.1716 22.8284 14.5 22 14.5C21.1716 14.5 20.5 15.1716 20.5 16C20.5 16.8284 21.1716 17.5 22 17.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
