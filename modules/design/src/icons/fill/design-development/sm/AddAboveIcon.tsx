import type { SVGProps } from "react";

export const AddAboveIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M22 16L2 16V14L22 14V16Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M22 20H2V22H22V20Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 1V11H11V1H13Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 7L7 7L7 5L17 5L17 7Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
