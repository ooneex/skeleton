import type { SVGProps } from "react";

export const ZippedFileIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.2426 1C12.1818 1 11.1644 1.42143 10.4142 2.17157L4.17157 8.41421C3.42143 9.16436 3 10.1818 3 11.2426V27C3 29.2091 4.79086 31 7 31H25C27.2091 31 29 29.2091 29 27V5C29 2.79086 27.2091 1 25 1H13.2426ZM17 5V7.5H15V5H17ZM17 9.5H15V12H17V9.5ZM17 14V16.5H15V14H17ZM18.0001 19H14L12.6364 26H19.3637L18.0001 19Z"
        fill="currentColor"
      />
    </svg>
  );
};
