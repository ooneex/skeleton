import type { SVGProps } from "react";

export const Ruler2Icon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0V32H23L23 0H9ZM11 20L11 22H15V20H11ZM11 10L15 10V12L11 12L11 10ZM11 27V25H18V27H11ZM11 17H18V15H11V17ZM11 7V5H18V7H11Z"
        fill="currentColor"
      />
    </svg>
  );
};
