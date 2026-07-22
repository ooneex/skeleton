import type { SVGProps } from "react";

export const TransparentIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M23 2H30V9H23V2Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M23 16H30V23H23V16Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M23 9H30V16H23V9Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M16 9H23V16H16V9Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M9 9H16V16H9V9Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 2H9V9H2V2Z" fill="currentColor" data-color="color-2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 16H9V23H2V16Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M2 23H9V30H2V23Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M9 16H16V23H9V16Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M23 23H30V30H23V23Z" fill="currentColor" />
    </svg>
  );
};
