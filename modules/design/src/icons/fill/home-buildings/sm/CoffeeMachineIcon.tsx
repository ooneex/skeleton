import type { SVGProps } from "react";

export const CoffeeMachineIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M2 11H10V22H2V19H5V17H2V15H5V13H2V11Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M18 8V12H16V8H18Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 15.8571L22 17C22 19.7614 19.7614 22 17 22C14.2386 22 12 19.7614 12 17L12 15.8571C12 14.8315 12.8315 14 13.8571 14L20.1429 14C21.1685 14 22 14.8315 22 15.8571Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 2H18C20.2091 2 22 3.79086 22 6V9H2V2Z" fill="currentColor" />
    </svg>
  );
};
