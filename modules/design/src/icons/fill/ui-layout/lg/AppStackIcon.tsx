import type { SVGProps } from "react";

export const AppStackIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M42 13H47V35H42V13Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 13H1V35H6V13Z" fill="currentColor" />
      <path d="M40 41V7H44V41H40Z" fill="currentColor" data-color="color-2" />
      <path d="M8 41V7H4V41H8Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M11 4H37V44H11V4Z" fill="currentColor" />
    </svg>
  );
};
