import type { SVGProps } from "react";

export const BedIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 10H12C14.2091 10 16 11.7909 16 14V15H6V10Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 5V17H30V27H28V23H4V27H2V5H4Z" fill="currentColor" />
    </svg>
  );
};
