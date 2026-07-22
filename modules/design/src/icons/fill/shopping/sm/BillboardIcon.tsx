import type { SVGProps } from "react";

export const BillboardIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 2H22V4H4V22H2V2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M10 5V9H8V5H10Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M20 5V9H18V5H20Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 7H22V17H6V7Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
