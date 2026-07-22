import type { SVGProps } from "react";

export const CartIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <circle cx="6" cy="21" r="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <circle cx="20" cy="21" r="2" fill="currentColor" strokeWidth="0" data-color="color-2" />
      <path
        d="m18.36,17H7.734c-1.483,0-2.76-1.107-2.97-2.575L3.133,3H0V1h4.867l.571,4h17.781l-1.918,9.589c-.278,1.396-1.516,2.411-2.941,2.411Z"
        strokeWidth="0"
        fill="currentColor"
      />
    </svg>
  );
};
