import type { SVGProps } from "react";

export const StairsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path d="M11 33H17" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M19 24H23" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M24 15H33" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M23 24H29" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path d="M32 15H38" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
      <path
        d="M43 6H27V15H19V24H11V33H5V42H43V6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        fill="none"
      />
      <path d="M38 6V15H31V24H23V33H17V42" stroke="currentColor" strokeWidth="2" strokeLinecap="square" fill="none" />
    </svg>
  );
};
