import type { SVGProps } from "react";

export const FolderIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M5 3C2.79086 3 1 4.79086 1 7V24C1 26.2091 2.79086 28 5 28H27C29.2091 28 31 26.2091 31 24V11C31 8.79086 29.2091 7 27 7H17.8L13.6 3H5Z"
        fill="currentColor"
      />
    </svg>
  );
};
