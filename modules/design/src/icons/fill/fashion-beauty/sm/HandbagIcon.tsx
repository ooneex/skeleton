import type { SVGProps } from "react";

export const HandbagIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4V5H8V4C8 1.79086 9.79086 0 12 0C14.2091 0 16 1.79086 16 4V5H14V4Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M21.5385 17.4717C21.858 19.8693 19.9925 21.9998 17.5736 22H6.42716C4.0081 22 2.14279 19.8695 2.46232 17.4717L4.12541 5H8.00041V9H10.0004V5H14.0004V9H16.0004V5H19.8764L21.5385 17.4717Z"
        fill="currentColor"
      />
    </svg>
  );
};
