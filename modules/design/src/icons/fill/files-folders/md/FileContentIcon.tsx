import type { SVGProps } from "react";

export const FileContentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.4142 2.17157C11.1644 1.42143 12.1818 1 13.2426 1H25C27.2091 1 29 2.79086 29 5V27C29 29.2091 27.2091 31 25 31H7C4.79086 31 3 29.2091 3 27V11.2426C3 10.1818 3.42143 9.16436 4.17157 8.41421L10.4142 2.17157ZM13 3V11H5L13 3ZM8 21V23H24V21H8ZM8 15H24V17H8V15ZM17 9V11H24V9H17Z"
        fill="currentColor"
      />
    </svg>
  );
};
