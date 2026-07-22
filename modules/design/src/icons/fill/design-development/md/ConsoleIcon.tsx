import type { SVGProps } from "react";

export const ConsoleIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2H30V30H2V2ZM6.58611 21.9999L12.586 16L6.58603 10.0001L8.00024 8.58587L15.4144 16L8.00032 23.4141L6.58611 21.9999ZM25 17V15H19V17H25ZM15 11H25V9H15V11ZM15 23V21H25V23H15Z"
        fill="currentColor"
      />
    </svg>
  );
};
