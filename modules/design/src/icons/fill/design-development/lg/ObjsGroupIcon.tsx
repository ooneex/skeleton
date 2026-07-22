import type { SVGProps } from "react";

export const ObjsGroupIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4 4H44V44H4V4ZM7 7V41H41V7H7Z" fill="currentColor" />
      <path d="M28 20H10V38H28V20Z" fill="currentColor" data-color="color-2" />
      <path d="M38 10H20V17H28C29.6569 17 31 18.3431 31 20V28H38V10Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
