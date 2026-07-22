import type { SVGProps } from "react";

export const BooksIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 3.07056L14.6288 16.6134L22.3509 14.5229L18.7274 1L11 3.07056ZM16.8649 5.64016L14.9331 6.1578L16.486 11.9534L18.4178 11.4357L16.8649 5.64016Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M16.1764 22.3891L15.1465 18.5453L22.8685 16.4548L23.9038 20.3185L16.1764 22.3891Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 2V16H11V2H3ZM8 6H6V12H8V6Z" fill="currentColor" />
      <path d="M3 22V18H11V22H3Z" fill="currentColor" />
    </svg>
  );
};
