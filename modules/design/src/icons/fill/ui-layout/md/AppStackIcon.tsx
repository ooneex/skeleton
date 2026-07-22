import type { SVGProps } from "react";

export const AppStackIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 2H26V30H6V2Z" fill="currentColor" />
      <rect x="1" y="4" width="3" height="24" fill="currentColor" data-color="color-2" />
      <rect x="28" y="4" width="3" height="24" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
