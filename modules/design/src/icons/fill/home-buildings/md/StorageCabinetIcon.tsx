import type { SVGProps } from "react";

export const StorageCabinetIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M6 25V30H4V25H6Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M28 25V30H26V25H28Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 3H12L12 27H1V7C1 4.79086 2.79086 3 5 3ZM9 16V14H6L6 16H9Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M31 27H14V3H27C29.2091 3 31 4.79086 31 7L31 27ZM22 16V14H17V16H22Z"
        fill="currentColor"
      />
    </svg>
  );
};
