import type { SVGProps } from "react";

export const TowelIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M28 6C28 4.89543 27.1046 4 26 4C24.8954 4 24 4.89543 24 6V17H22V6C22 3.79086 23.7909 2 26 2C28.2091 2 30 3.79086 30 6V30H5V21H7V26H28V6Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M26 4H24V17H2V6C2 3.79086 3.79086 2 6 2H26V4ZM4 12V14H22V12H4Z"
        fill="currentColor"
      />
      <path d="M24 23H2V19H24V23Z" fill="currentColor" data-color="color-2" />
    </svg>
  );
};
