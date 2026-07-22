import type { SVGProps } from "react";

export const AddAboveIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17 2V14H15V2H17Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 9L10 9L10 7L22 7L22 9Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 19H30V21H2V19Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 27H30V29H2V27Z" fill="currentColor" />
    </svg>
  );
};
