import type { SVGProps } from "react";

export const ShapesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13.5 2.5H21.5V10.5H13.5V2.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 8.98528 8.98528 11 6.5 11C4.01472 11 2 8.98528 2 6.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M7.5 13V22H5.5V13H7.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 16.5H11V18.5H2V16.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5 13L22.5001 21H12.5001L17.5 13Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
