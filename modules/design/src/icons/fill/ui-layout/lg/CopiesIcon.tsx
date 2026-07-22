import type { SVGProps } from "react";

export const CopiesIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M9 8H39V11H9V8Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15 2H33V5H15V2Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 14H46V44H2V14Z" fill="currentColor" />
    </svg>
  );
};
