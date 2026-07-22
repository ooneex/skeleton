import type { SVGProps } from "react";

export const LetterEIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M19.667 15V17H8V15H19.667Z" fill="currentColor" />
      <path d="M26 2V4H10V28H26V30H8V2H26Z" fill="currentColor" />
    </svg>
  );
};
