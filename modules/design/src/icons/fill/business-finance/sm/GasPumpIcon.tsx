import type { SVGProps } from "react";

export const GasPumpIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M21 8H23V13H21V8Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 3.58578L24 6.58578V14.5C24 16.433 22.433 18 20.5 18C18.567 18 17 16.433 17 14.5V11H19V14.5C19 15.3284 19.6716 16 20.5 16C21.3284 16 22 15.3284 22 14.5V7.41421L19.5858 5L21 3.58578Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 2C17.6569 2 19 3.34315 19 5L19 21H3V5C3 3.34315 4.34315 2 6 2H16ZM15 6H7V13H15V6Z"
        fill="currentColor"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 20H21V22H1V20Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
