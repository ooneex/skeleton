import type { SVGProps } from "react";

export const TeaCupIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M30 13V9H25V7H32V13C32 15.2091 30.2091 17 28 17H25V15H28C29.1046 15 30 14.1046 30 13Z"
        fill="currentColor"
      />
      <path d="M13 0H15V5H13V0Z" fill="currentColor" data-color="color-2" />
      <path d="M18 2H20V5H18V2Z" fill="currentColor" data-color="color-2" />
      <path d="M8 2H10V5H8V2Z" fill="currentColor" data-color="color-2" />
      <path
        d="M15 15H12V22H20V15H17V7H27V17.5C27 24.4036 21.4036 30 14.5 30C7.59644 30 2 24.4036 2 17.5V7H15V15Z"
        fill="currentColor"
      />
    </svg>
  );
};
