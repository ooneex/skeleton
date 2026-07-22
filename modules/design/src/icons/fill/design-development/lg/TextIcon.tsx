import type { SVGProps } from "react";

export const TextIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M25.5 6V42H22.5V6H25.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M41 9L7 9.00001L7 6.00001L41 6L41 9Z" fill="currentColor" />
    </svg>
  );
};
