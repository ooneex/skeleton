import type { SVGProps } from "react";

export const ContactsIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M32 4V28H30V4H32Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 4V28H0V4H2Z" fill="currentColor" data-color="color-2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 31C26.2091 31 28 29.2091 28 27L28 5C28 2.79086 26.2091 1 24 1H8C5.79086 1 4 2.79086 4 5L4 27C4 29.2091 5.79086 31 8 31L24 31ZM19.5 11C19.5 12.933 17.933 14.5 16 14.5C14.067 14.5 12.5 12.933 12.5 11C12.5 9.067 14.067 7.5 16 7.5C17.933 7.5 19.5 9.067 19.5 11ZM16 16C12.134 16 9 19.134 9 23H23C23 19.134 19.866 16 16 16Z"
        fill="currentColor"
      />
    </svg>
  );
};
