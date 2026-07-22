import type { SVGProps } from "react";

export const ArrowTriangleLineExpandDiagonalIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.0858 4.50012L13.0859 9.50006L14.5001 10.9143L19.5 5.91434L18.0858 4.50012Z"
        fill="currentColor"
      />
      <path
        d="M4.50006 18.0857L5.91427 19.4999L10.9143 14.4999L9.50009 13.0857L4.50006 18.0857Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M22.0003 10L14.0003 1.99997L22.0003 2.00007L22.0003 10Z" fill="currentColor" />
      <path d="M1.99998 14L9.99997 22L1.99995 21.9999L1.99998 14Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
