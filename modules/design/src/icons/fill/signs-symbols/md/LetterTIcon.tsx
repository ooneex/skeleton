import type { SVGProps } from "react";

export const LetterTIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M15 2H17V30H15V2Z" fill="currentColor" />
      <path d="M28 2V4L4 4L4 2L28 2Z" fill="currentColor" />
    </svg>
  );
};
