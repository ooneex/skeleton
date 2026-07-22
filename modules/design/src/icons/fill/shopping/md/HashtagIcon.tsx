import type { SVGProps } from "react";

export const HashtagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 21H27V23H3V21Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 9H29V11H5V9Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.6709 2.2068L8.2932 30.1708L6.32919 29.7931L11.7069 1.8291L13.6709 2.2068Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.6709 2.2068L20.2932 30.1708L18.3292 29.7931L23.7069 1.8291L25.6709 2.2068Z"
        fill="currentColor"
      />
    </svg>
  );
};
