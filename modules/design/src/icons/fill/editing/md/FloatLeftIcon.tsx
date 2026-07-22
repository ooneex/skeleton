import type { SVGProps } from "react";

export const FloatLeftIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 13.5C2 12.1193 3.11929 11 4.5 11H9.5C10.8807 11 12 12.1193 12 13.5V18.5C12 19.8807 10.8807 21 9.5 21H4.5C3.11929 21 2 19.8807 2 18.5V13.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M15 11H30V13H15V11Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 3H30V5H2V3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15 19H30V21H15V19Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 27H30V29H2V27Z" fill="currentColor" />
    </svg>
  );
};
