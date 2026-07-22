import type { SVGProps } from "react";

export const ShapesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 2C28.2091 2 30 3.79086 30 6L30 26C30 28.2091 28.2091 30 26 30L6 30C3.79086 30 2 28.2091 2 26L2 6C2 3.79086 3.79086 2 6 2L26 2ZM28 6C28 4.89543 27.1046 4 26 4L6 4C4.89543 4 4 4.89543 4 6L4 26C4 27.1046 4.89543 28 6 28L26 28C27.1046 28 28 27.1046 28 26L28 6Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M17.5 6.5H25.5V14.5H17.5V6.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M11.5 17V26H9.5V17H11.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 20.5H15V22.5H6V20.5Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.4999 16.5154L26.7411 25.5H16.259L21.4999 16.5154Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
