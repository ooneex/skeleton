import type { SVGProps } from "react";

export const FileTreeIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M7 11H22V14H7V11Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M9 2V34H22V37H6V2H9Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M25 3H34.8346L41 9.60584V22H25V3Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M25 26H34.8346L41 32.6058V45H25V26Z" fill="currentColor" />
    </svg>
  );
};
