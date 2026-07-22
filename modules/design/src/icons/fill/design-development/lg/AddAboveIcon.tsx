import type { SVGProps } from "react";

export const AddAboveIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.5 3V21H22.5V3H25.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M33 13.5L15 13.5L15 10.5L33 10.5L33 13.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 28.5H44V31.5H4V28.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 40.5H44V43.5H4V40.5Z" fill="currentColor" />
    </svg>
  );
};
