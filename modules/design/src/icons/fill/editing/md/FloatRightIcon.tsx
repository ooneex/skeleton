import type { SVGProps } from "react";

export const FloatRightIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 13.5C20 12.1193 21.1193 11 22.5 11H27.5C28.8807 11 30 12.1193 30 13.5V18.5C30 19.8807 28.8807 21 27.5 21H22.5C21.1193 21 20 19.8807 20 18.5V13.5Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 11H2V13H17V11Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M30 3H2V5H30V3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M17 19H2V21H17V19Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M30 27H2V29H30V27Z" fill="currentColor" />
    </svg>
  );
};
