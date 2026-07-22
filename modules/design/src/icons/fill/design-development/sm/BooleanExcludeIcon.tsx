import type { SVGProps } from "react";

export const BooleanExcludeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M1 7H11V9H3V21H15V13H17V23H1V7Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M7 1H23V17H13V15H21V3H9V11H7V1Z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 11L15 9L13 9L13 7L17 7L17 11L15 11Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13L9 15L11 15L11 17L7 17L7 13L9 13Z"
        fill="currentColor"
        data-color="color-2"
      />
    </svg>
  );
};
