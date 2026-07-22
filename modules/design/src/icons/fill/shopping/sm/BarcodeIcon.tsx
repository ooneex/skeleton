import type { SVGProps } from "react";

export const BarcodeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 2V22H2V2H4Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M10 2V22H8V2H10Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 2V22H12V2H14Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M19 2V22H17V2H19Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M8 2V22H6V2H8Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 2V22H20V2H22Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
