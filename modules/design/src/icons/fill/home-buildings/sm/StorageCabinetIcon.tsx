import type { SVGProps } from "react";

export const StorageCabinetIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M5 19V23H3V19H5Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M21 19V23H19V19H21Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 3H9L9 21H1V6C1 4.34314 2.34315 3 4 3ZM7.01003 13L7.00999 11L4.99999 11L5.00003 13L7.01003 13Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23 21H11V3H20C21.6569 3 23 4.34315 23 6L23 21ZM19 13V11H13V13H19Z"
        fill="currentColor"
      />
    </svg>
  );
};
