import type { SVGProps } from "react";

export const AddBelowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5 45V27H22.5V45H25.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 34.5L15 34.5L15 37.5L33 37.5L33 34.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 19.5H44V16.5H4V19.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 7.5H44V4.5H4V7.5Z" fill="currentColor" />
    </svg>
  );
};
