import type { SVGProps } from "react";

export const NailArtIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M26 29L26 14.4741C26 11.4707 24.499 8.66597 22 6.99999V6.99999V6.33332"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path
        d="M6 29L6 14.4741C6 11.4707 7.50102 8.66597 10 6.99999V6.99999V6.33332"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M13 27H19" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M10 3.52858C11.8219 2.5275 13.8922 2.00008 16 2C18.1078 2.00008 20.1781 2.5275 22 3.52858V14C22 16.7614 19.7614 19 17 19H15C12.2386 19 10 16.7614 10 14V3.52858Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
    </svg>
  );
};
