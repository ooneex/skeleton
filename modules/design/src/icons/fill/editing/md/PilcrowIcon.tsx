import type { SVGProps } from "react";

export const PilcrowIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M23 2V30H21V2H23Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M14 2V30H12V2H14Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 9C2 5.13401 5.13401 2 9 2H28V4H9C6.23858 4 4 6.23858 4 9C4 11.7614 6.23858 14 9 14H14V16H9C5.13401 16 2 12.866 2 9Z"
        fill="currentColor"
      />
    </svg>
  );
};
