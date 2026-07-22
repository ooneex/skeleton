import type { SVGProps } from "react";

export const SuitcasePlayIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 2H33V12H30V5H18V12H15V2Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 38C2 41.3106 4.67105 44 7.98791 44H40.0121C43.3289 44 46 41.3106 46 38V16C46 12.6884 43.3239 10 40.0081 10H7.9985C4.6844 10 2 12.6867 2 16V38ZM34.9697 27L18 17V37L34.9697 27Z"
        fill="currentColor"
      />
    </svg>
  );
};
