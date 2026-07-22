import type { SVGProps } from "react";

export const BooksIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 2H13V23H3V2ZM7 16H9L9 7L7 7L7 16Z" fill="currentColor" />
      <path d="M3 25H13V30H3V25Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 3L22.6593 0.41181L28.0945 20.6963L18.4352 23.2844L13 3ZM20.4872 15.4877L22.419 14.97L20.0896 6.27671L18.1578 6.79435L20.4872 15.4877Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M18.9528 25.2163L28.6121 22.6281L29.9062 27.4577L20.2469 30.0459L18.9528 25.2163Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
