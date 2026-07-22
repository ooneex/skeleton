import type { SVGProps } from "react";

export const ListTreeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M7 9.5H17V12.5H7V9.5Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 22.4998H17V25.4998H7V22.4998Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2V35.5H17V38.5H6V2H9Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path d="M44 19H20V29H44V19Z" fill="currentColor" />
      <path d="M44 6H20V16H44V6Z" fill="currentColor" />
      <path d="M44 32H20V42H44V32Z" fill="currentColor" />
    </svg>
  );
};
