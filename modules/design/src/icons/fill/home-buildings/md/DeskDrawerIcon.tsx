import type { SVGProps } from "react";

export const DeskDrawerIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M13 29L11 29L11 16L13 16L13 29Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M31 15L31 29L29 29L29 15L31 15Z" fill="currentColor" />
      <path
        d="M27 3C29.2091 3 31 4.79086 31 7L31 9L1 9L1 7C1 4.79086 2.79086 3 5 3L27 3Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M3 11L3 29L0.999999 29L1 11L3 11Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 11L31 11V19L11 19V11ZM23 16V14H19V16H23Z"
        fill="currentColor"
      />
    </svg>
  );
};
