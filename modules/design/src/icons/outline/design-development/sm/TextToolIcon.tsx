import type { SVGProps } from "react";

export const TextToolIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M6 4H18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M6 20H18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M20 6L20 18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M4 6L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M6 2H2V6H6V2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M6 18H2V22H6V18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22 2H18V6H22V2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path
        d="M22 18H18V22H22V18Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="square"
        data-color="color-2"
        fill="none"
      />
      <path d="M12 16V9" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M9 9H15" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
