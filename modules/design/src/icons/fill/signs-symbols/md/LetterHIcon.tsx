import type { SVGProps } from "react";

export const LetterHIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M26 15V17H6V15H26Z" fill="currentColor" />
      <path d="M6 2H8V30H6V2Z" fill="currentColor" />
      <path d="M24 2H26V30H24V2Z" fill="currentColor" />
    </svg>
  );
};
