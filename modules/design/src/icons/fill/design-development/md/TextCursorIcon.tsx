import type { SVGProps } from "react";

export const TextCursorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M9 19H23V21H9V19Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 29L11 29C13.2091 29 15 27.2091 15 25L15 7C15 4.79086 13.2091 3 11 3L9 3L9 1L11 1C14.3137 1 17 3.68629 17 7L17 25C17 28.3137 14.3137 31 11 31L9 31L9 29Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 29L21 29C18.7909 29 17 27.2091 17 25L17 7C17 4.79086 18.7909 3 21 3L23 3L23 1L21 1C17.6863 1 15 3.68629 15 7L15 25C15 28.3137 17.6863 31 21 31L23 31L23 29Z"
        fill="currentColor"
      />
    </svg>
  );
};
