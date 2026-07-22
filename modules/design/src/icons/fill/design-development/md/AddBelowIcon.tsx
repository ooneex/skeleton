import type { SVGProps } from "react";

export const AddBelowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17 30V18H15V30H17Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 23L10 23L10 25L22 25L22 23Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 13H30V11H2V13Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 5H30V3H2V5Z" fill="currentColor" />
    </svg>
  );
};
