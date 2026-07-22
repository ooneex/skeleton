import type { SVGProps } from "react";

export const CaretAllDirectionsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 7.50024L16.0001 0.833548L21 7.5L11 7.50024Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 24.5001L16.0001 31.1668L21 24.5004L11 24.5001Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.4998 11L31.1665 16.0001L24.5 21L24.4998 11Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M7.5 11L0.833303 16.0001L7.49976 21L7.5 11Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16C21 18.7614 18.7614 21 16 21C13.2386 21 11 18.7614 11 16Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
