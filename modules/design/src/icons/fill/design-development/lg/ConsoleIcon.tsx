import type { SVGProps } from "react";

export const ConsoleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4H44V44H4V4ZM10.3787 32.5004L18.8791 24L10.3787 15.5L12.4999 13.3786L23.1218 23.9999L12.5 34.6217L10.3787 32.5004ZM37 25.5V22.5H29V25.5H37ZM23 17H37V14H23V17ZM23 34L23 31L37 31L37 34L23 34Z"
        fill="currentColor"
      />
    </svg>
  );
};
