import type { SVGProps } from "react";

export const ListTreeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 5.00024H12V7.00024H5V5.00024Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 14.9998H12V16.9998H5V14.9998Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 1.00024V25.0002H12V27.0002H4V1.00024H6Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 2H29V10H14V2Z" fill="currentColor" />
      <path d="M14 12H29V20H14V12Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 22H29V30H14V22Z" fill="currentColor" />
    </svg>
  );
};
