import type { SVGProps } from "react";

export const DoorIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 2L9 46H39L39 2L9 2ZM22.5 23L22.5 7L14 6.99999L14 23L22.5 23ZM34 7V23L25.5 23V6.99999L34 7ZM14 30V27H20V30H14Z"
        fill="currentColor"
      />
    </svg>
  );
};
