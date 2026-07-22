import type { SVGProps } from "react";

export const MugIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M22 11V8H19V6H24V11C24 13.2091 22.2091 15 20 15H19V13H20C21.1046 13 22 12.1046 22 11Z"
        fill="currentColor"
      />
      <path
        d="M20 20C20 21.6569 18.6569 23 17 23H7C5.39489 23 4.08421 21.7394 4.00391 20.1543L4 6H20V20Z"
        fill="currentColor"
      />
      <path d="M11 0H13V3H11V0Z" fill="currentColor" data-color="color-2" />
      <path d="M15 1H17V4H15V1Z" fill="currentColor" data-color="color-2" />
      <path d="M7 1H9V4H7V1Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
