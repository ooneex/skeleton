import type { SVGProps } from "react";

export const TextIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17 4V28H15V4H17Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M5 4H27V6H5V4Z" fill="currentColor" />
    </svg>
  );
};
