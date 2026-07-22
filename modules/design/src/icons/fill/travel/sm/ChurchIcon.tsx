import type { SVGProps } from "react";

export const ChurchIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13 0V7.5H11V0H13Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M9 2H15V4H9V2Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 10.4648L12 5.79816L5 10.4648V22H19V10.4648ZM12 16C10.8954 16 10 16.8954 10 18V22H14V18C14 16.8954 13.1046 16 12 16Z"
        fill="currentColor"
      />
      <path d="M21 22L23 22V14.807L21 14.057V22Z" fill="currentColor" data-color="color-2" />
      <path d="M3 14.057L1 14.807V22H3V14.057Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
