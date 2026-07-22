import type { SVGProps } from "react";

export const TypographyIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M17 41H31V44H17V41Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 4H42V14H39V7H9V14H6V4Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M25.5 4V44H22.5V4H25.5Z" fill="currentColor" />
    </svg>
  );
};
