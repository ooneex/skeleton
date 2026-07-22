import type { SVGProps } from "react";

export const DeskIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3 15L3 29L0.999999 29L1 15L3 15Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M31 15L31 29L29 29L29 15L31 15Z" fill="currentColor" />
      <path
        d="M27 3C29.2091 3 31 4.79086 31 7L31 9L1 9L1 7C1 4.79086 2.79086 3 5 3L27 3Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M1 11L15 11V19L1 19V11ZM10 16V14H6V16H10Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 11L31 11V19L17 19V11ZM26 16V14H22V16H26Z"
        fill="currentColor"
      />
    </svg>
  );
};
