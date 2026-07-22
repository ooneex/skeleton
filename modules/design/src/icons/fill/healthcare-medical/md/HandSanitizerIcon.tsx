import type { SVGProps } from "react";

export const HandSanitizerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M17 2.00006V7.00006H15V2.00006H17Z" fill="currentColor" data-color="color-2" />
      <path d="M10 8H22V5H10V8Z" fill="currentColor" />
      <path
        d="M5 5.99994C5 3.23852 7.23858 0.999926 10 0.999939H24V2.99994H10C8.34315 2.99993 7 4.34309 7 5.99994V6.99994H5V5.99994Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 10C26.2091 10 28 11.7909 28 14V27C28 29.2091 26.2091 31 24 31H8C5.79086 31 4 29.2091 4 27V14C4 11.7909 5.79086 10 8 10H24ZM14 14V18H10V22H14V26H18V22H22V18H18V14H14Z"
        fill="currentColor"
      />
    </svg>
  );
};
