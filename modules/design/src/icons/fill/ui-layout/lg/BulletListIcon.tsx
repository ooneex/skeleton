import type { SVGProps } from "react";

export const BulletListIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg height="16" width="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
      <path
        d="M9 16C11.7614 16 14 13.7614 14 11C14 8.23858 11.7614 6 9 6C6.23858 6 4 8.23858 4 11C4 13.7614 6.23858 16 9 16Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path
        d="M9 36C11.7614 36 14 33.7614 14 31C14 28.2386 11.7614 26 9 26C6.23858 26 4 28.2386 4 31C4 33.7614 6.23858 36 9 36Z"
        fill="currentColor"
        data-color="color-2"
      />
      <path fillRule="evenodd" clipRule="evenodd" d="M21 9.5L44 9.5V12.5L21 12.5V9.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M21 29.5L44 29.5V32.5L21 32.5V29.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M21 19.5L44 19.5V22.5L21 22.5V19.5Z" fill="currentColor" />
      <path fillRule="evenodd" clipRule="evenodd" d="M21 39.5L44 39.5V42.5L21 42.5V39.5Z" fill="currentColor" />
    </svg>
  );
};
