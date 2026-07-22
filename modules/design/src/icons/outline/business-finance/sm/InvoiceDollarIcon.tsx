import type { SVGProps } from "react";

export const InvoiceDollarIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M12 17V18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M12 8V9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" data-color="color-2" fill="none" />
      <path
        d="M14 9L11 9C9.89543 9 9 9.89543 9 11V11C9 12.1046 9.89543 13 11 13H13C14.1046 13 15 13.8954 15 15V15C15 16.1046 14.1046 17 13 17H10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M18 22L6 22C4.89543 22 4 21.1046 4 20L4 2.5L8 4L12 2L16 4L20 2.5L20 20C20 21.1046 19.1046 22 18 22Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        fill="none"
      />
    </svg>
  );
};
