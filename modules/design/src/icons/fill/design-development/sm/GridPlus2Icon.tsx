import type { SVGProps } from "react";

export const GridPlus2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2 2H11V11H2V2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 13H11V22H2V13Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 2H22V11H13V2Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 13V22H16.5V13H18.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 18.5L13 18.5L13 16.5L22 16.5L22 18.5Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
