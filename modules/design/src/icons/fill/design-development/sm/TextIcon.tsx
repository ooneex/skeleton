import type { SVGProps } from "react";

export const TextIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 3H20V5H4V3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 3V21H11V3H13Z" fill="currentColor" />
    </svg>
  );
};
